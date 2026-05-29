# scripts/build-winter-vuln.py
#
# Provenance + one-shot build for the WINTER / ENERGY-BURDEN layer.
#
# The honest design decision (see docs/peel-winter-vuln-data-note.md): winter cold
# has no urban spatial gradient the way heat does (no winter heat-island), so we do
# NOT fake a per-tract cold-temperature index. Winter RESILIENCE NEED is driven by
# energy affordability and marginalization, which IS real per-area data. We map that.
#
#   Source : 2021 Ontario Marginalization Index (ON-Marg), sheet "2021_CTUID".
#            Joint publication of St. Michael's Hospital (Unity Health Toronto) and
#            Public Health Ontario. Underlying data: Statistics Canada 2021 Census
#            Profile (98-316-X2021001). Freely usable, non-commercial, with credit.
#            Download: https://www.publichealthontario.ca/-/media/Data-Files/index-on-marg.xlsx
#   Measure: Material Resources quintile (formerly "Material Deprivation"): income,
#            education, lone-parent families, etc. 1 = low marginalization,
#            5 = high marginalization. The affordability driver of winter need.
#            We also carry the Households and Dwellings quintile (residential
#            instability: renters, apartments, living alone) as context.
#   Join   : ON-Marg CTUID -> the 282 Peel census tracts already in peel-hvi.geojson
#            (so the winter choropleth reuses the SAME tract geometry as the heat map).
#
#   Reproduce:  pip install openpyxl
#               python scripts/build-winter-vuln.py        (cwd = sanctuary/web)
#   Outputs  :  public/peel-winter-vuln.geojson   (282 CT polygons + quintiles)
#               ../data/onmarg-peel-ct.csv         (human-auditable Peel extract)
#
# Cross-check (asserted): 282 tracts joined; Malton CT 5350530.01 -> Material
# Resources quintile 5. The script refuses to write if either fails.

import json
import os
import urllib.request
import csv
from pathlib import Path

import openpyxl

HERE = Path(__file__).resolve().parent
PUBLIC = HERE.parent / "public"
DATA = HERE.parent.parent / "data"
HVI = PUBLIC / "peel-hvi.geojson"
OUT_GEOJSON = PUBLIC / "peel-winter-vuln.geojson"
OUT_CSV = DATA / "onmarg-peel-ct.csv"
XLSX_URL = "https://www.publichealthontario.ca/-/media/Data-Files/index-on-marg.xlsx"
XLSX_LOCAL = os.environ.get("ONMARG_XLSX") or str(HERE / "_onmarg-tmp.xlsx")


def key(ctuid):
    # normalize "5350576.20" / "5350576.2" / float -> a stable 2-decimal key
    return round(float(ctuid), 2)


def load_onmarg(path):
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    ws = wb["2021_CTUID"]
    header = [c for c in next(ws.iter_rows(min_row=1, max_row=1, values_only=True))]
    idx = {h: i for i, h in enumerate(header) if h}

    def find(part):
        return next((i for h, i in idx.items() if part in h), None)

    c_pop = find("pop2021")
    c_mr_score = find("material_resources_C")
    c_mr_q = find("material_resources_q")
    c_hd_q = find("households_dwellings_q")
    out = {}
    for r in ws.iter_rows(min_row=2, values_only=True):
        if r[0] is None:
            continue
        try:
            k = key(r[0])
        except (TypeError, ValueError):
            continue
        out[k] = {
            "ctuid": str(r[0]),
            "pop2021": r[c_pop],
            "mr_score": r[c_mr_score],
            "mr_q": r[c_mr_q],
            "hd_q": r[c_hd_q],
        }
    return out


def main():
    if not Path(XLSX_LOCAL).exists():
        print(f"downloading ON-Marg xlsx -> {XLSX_LOCAL}")
        urllib.request.urlretrieve(XLSX_URL, XLSX_LOCAL)
    onmarg = load_onmarg(XLSX_LOCAL)
    print(f"ON-Marg census-tract rows: {len(onmarg)}")

    hvi = json.loads(HVI.read_text(encoding="utf-8"))
    features = []
    rows = []
    dist = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    missing = []
    for f in hvi["features"]:
        ctuid = f["properties"]["CTUID"]
        m = onmarg.get(key(ctuid))
        if not m or m["mr_q"] not in (1, 2, 3, 4, 5):
            missing.append(ctuid)
            continue
        mr_q = int(m["mr_q"])
        hd_q = int(m["hd_q"]) if m["hd_q"] in (1, 2, 3, 4, 5) else None
        dist[mr_q] += 1
        features.append({
            "type": "Feature",
            "properties": {"CTUID": ctuid, "MR_q": mr_q, "HD_q": hd_q, "pop2021": m["pop2021"]},
            "geometry": f["geometry"],
        })
        rows.append({
            "ctuid": ctuid,
            "pop2021": m["pop2021"],
            "material_resources_score": m["mr_score"],
            "material_resources_q": mr_q,
            "households_dwellings_q": hd_q,
        })

    if missing:
        raise SystemExit(f"{len(missing)} Peel CTs had no ON-Marg match: {missing[:5]} ... refusing to ship.")

    fc = {"type": "FeatureCollection", "name": "peel_winter_vuln_onmarg2021", "features": features}
    OUT_GEOJSON.write_text(json.dumps(fc, separators=(",", ":")), encoding="utf-8")

    rows.sort(key=lambda r: key(r["ctuid"]))
    with OUT_CSV.open("w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=["ctuid", "pop2021", "material_resources_score", "material_resources_q", "households_dwellings_q"])
        w.writeheader()
        w.writerows(rows)

    # --- self-verification ---
    print(f"wrote {OUT_GEOJSON.name}: {len(features)} tracts")
    print(f"wrote {OUT_CSV.relative_to(HERE.parent.parent)}: {len(rows)} rows")
    print("Material Resources quintile distribution (Peel):", dist)
    malton = onmarg.get(key("5350530.01"))
    print(f"Malton CT 5350530.01 -> Material Resources quintile {malton['mr_q']}")
    if len(features) != 282:
        raise SystemExit(f"expected 282 tracts, got {len(features)} - refusing to ship.")
    if int(malton["mr_q"]) != 5:
        raise SystemExit(f"Malton Material Resources quintile must be 5, got {malton['mr_q']} - refusing to ship.")
    print("OK: 282 tracts, Malton = Material Resources quintile 5.")


if __name__ == "__main__":
    main()
