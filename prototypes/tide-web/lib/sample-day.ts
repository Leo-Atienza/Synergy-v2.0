import type { FuelMix } from "@/lib/types";

// Representative Ontario summer weekday. Magnitudes (MW) grounded in IESO ranges.
// Deterministic demo fixture; live current-intensity is fetched separately in grid.ts.
export const SAMPLE_DAY: { date: string; weekday: boolean; hours: { hour: number; mix: FuelMix }[] } = {
  date: "2026-07-15",
  weekday: true,
  hours: [
    { hour: 0, mix: { NUCLEAR: 9000, GAS: 1100, HYDRO: 3200, WIND: 2400, SOLAR: 0, BIOFUEL: 100, OTHER: 50 } },
    { hour: 1, mix: { NUCLEAR: 9000, GAS: 1000, HYDRO: 3000, WIND: 2500, SOLAR: 0, BIOFUEL: 100, OTHER: 50 } },
    { hour: 2, mix: { NUCLEAR: 9000, GAS: 950, HYDRO: 2900, WIND: 2600, SOLAR: 0, BIOFUEL: 100, OTHER: 50 } },
    { hour: 3, mix: { NUCLEAR: 9000, GAS: 900, HYDRO: 2800, WIND: 2700, SOLAR: 0, BIOFUEL: 100, OTHER: 50 } },
    { hour: 4, mix: { NUCLEAR: 9000, GAS: 950, HYDRO: 2800, WIND: 2600, SOLAR: 0, BIOFUEL: 100, OTHER: 50 } },
    { hour: 5, mix: { NUCLEAR: 9000, GAS: 1100, HYDRO: 2900, WIND: 2400, SOLAR: 30, BIOFUEL: 100, OTHER: 50 } },
    { hour: 6, mix: { NUCLEAR: 9000, GAS: 1400, HYDRO: 3100, WIND: 2100, SOLAR: 150, BIOFUEL: 100, OTHER: 50 } },
    { hour: 7, mix: { NUCLEAR: 9000, GAS: 1900, HYDRO: 3400, WIND: 1700, SOLAR: 400, BIOFUEL: 100, OTHER: 60 } },
    { hour: 8, mix: { NUCLEAR: 9000, GAS: 2300, HYDRO: 3700, WIND: 1400, SOLAR: 700, BIOFUEL: 100, OTHER: 60 } },
    { hour: 9, mix: { NUCLEAR: 9000, GAS: 2600, HYDRO: 3900, WIND: 1200, SOLAR: 1000, BIOFUEL: 100, OTHER: 60 } },
    { hour: 10, mix: { NUCLEAR: 9000, GAS: 2800, HYDRO: 4000, WIND: 1000, SOLAR: 1250, BIOFUEL: 100, OTHER: 60 } },
    { hour: 11, mix: { NUCLEAR: 9000, GAS: 2900, HYDRO: 4100, WIND: 900, SOLAR: 1400, BIOFUEL: 100, OTHER: 60 } },
    { hour: 12, mix: { NUCLEAR: 9000, GAS: 3000, HYDRO: 4200, WIND: 800, SOLAR: 1500, BIOFUEL: 100, OTHER: 60 } },
    { hour: 13, mix: { NUCLEAR: 9000, GAS: 3100, HYDRO: 4300, WIND: 750, SOLAR: 1500, BIOFUEL: 100, OTHER: 60 } },
    { hour: 14, mix: { NUCLEAR: 9000, GAS: 3300, HYDRO: 4400, WIND: 700, SOLAR: 1400, BIOFUEL: 100, OTHER: 60 } },
    { hour: 15, mix: { NUCLEAR: 9000, GAS: 3600, HYDRO: 4500, WIND: 700, SOLAR: 1150, BIOFUEL: 100, OTHER: 60 } },
    { hour: 16, mix: { NUCLEAR: 9000, GAS: 4100, HYDRO: 4700, WIND: 750, SOLAR: 800, BIOFUEL: 100, OTHER: 70 } },
    { hour: 17, mix: { NUCLEAR: 9000, GAS: 4600, HYDRO: 4900, WIND: 800, SOLAR: 450, BIOFUEL: 100, OTHER: 70 } },
    { hour: 18, mix: { NUCLEAR: 9000, GAS: 4900, HYDRO: 5000, WIND: 850, SOLAR: 200, BIOFUEL: 100, OTHER: 70 } },
    { hour: 19, mix: { NUCLEAR: 9000, GAS: 4800, HYDRO: 4900, WIND: 950, SOLAR: 50, BIOFUEL: 100, OTHER: 70 } },
    { hour: 20, mix: { NUCLEAR: 9000, GAS: 4300, HYDRO: 4600, WIND: 1100, SOLAR: 0, BIOFUEL: 100, OTHER: 70 } },
    { hour: 21, mix: { NUCLEAR: 9000, GAS: 3500, HYDRO: 4200, WIND: 1400, SOLAR: 0, BIOFUEL: 100, OTHER: 60 } },
    { hour: 22, mix: { NUCLEAR: 9000, GAS: 2500, HYDRO: 3800, WIND: 1800, SOLAR: 0, BIOFUEL: 100, OTHER: 60 } },
    { hour: 23, mix: { NUCLEAR: 9000, GAS: 1700, HYDRO: 3400, WIND: 2100, SOLAR: 0, BIOFUEL: 100, OTHER: 50 } },
  ],
};
