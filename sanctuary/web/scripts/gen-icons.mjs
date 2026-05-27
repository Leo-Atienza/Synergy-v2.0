// Rasterises the Sanctuary mark into the PNGs platforms need beyond the modern
// desktop favicon (app/icon.svg): an Apple touch icon and maskable manifest
// icons. Full-bleed navy (no rounded corners — iOS/Android mask the square
// themselves), glyph centred inside the maskable safe zone (~53% of canvas).
// Uses sharp (already a dependency). Re-run: `node scripts/gen-icons.mjs`.
import sharp from "sharp";

const NAVY = "#0d1620";
const CREAM = "#eaf1f6";
const EMBER = "#e07533";

// Same roof + ember core + catchment arc as app/icon.svg (32-unit grid),
// scaled and centred on a 512 canvas.
const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="${NAVY}"/>
  <g transform="translate(64,64.6) scale(12)" fill="none">
    <path d="M9.2 24.1 Q16 26.8 22.8 24.1" stroke="${EMBER}" stroke-opacity="0.42" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M16 5.8 L27.2 16.7 L23.2 16.7 L16 9.6 L8.8 16.7 L4.8 16.7 Z" fill="${CREAM}" stroke="${CREAM}" stroke-width="1.3" stroke-linejoin="round"/>
    <circle cx="16" cy="20.4" r="3.5" fill="${EMBER}"/>
  </g>
</svg>`;

const buf = Buffer.from(svg);
const targets = [
  { file: "app/apple-icon.png", size: 180 }, // iOS / iPadOS / macOS Safari
  { file: "public/icon-192.png", size: 192 }, // Android / PWA (manifest)
  { file: "public/icon-512.png", size: 512 }, // Android / PWA (manifest)
];

for (const { file, size } of targets) {
  await sharp(buf, { density: 144 }).resize(size, size).png().toFile(file);
  const meta = await sharp(file).metadata();
  console.log(`wrote ${file} (${meta.width}x${meta.height}, ${meta.channels}ch)`);
}
