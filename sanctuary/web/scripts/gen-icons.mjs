// Rasterises the Sanctuary mark into the PNGs platforms need beyond the modern
// desktop favicon (app/icon.svg): an Apple touch icon and maskable manifest
// icons. Full-bleed navy (no rounded corners — iOS/Android mask the square
// themselves), glyph centred inside the maskable safe zone (~53% of canvas).
// Uses sharp (already a dependency). Re-run: `node scripts/gen-icons.mjs`.
import sharp from "sharp";

const NAVY = "#0d1620";
const CREAM = "#eaf1f6";
const EMBER = "#e07533";

// Same roof-over-people mark as app/icon.svg (32-unit grid), scaled and centred
// on a 512 canvas. Full-bleed navy (platforms mask the square); the glyph sits
// inside the maskable safe zone.
const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="${NAVY}"/>
  <g transform="translate(64,64.6) scale(12)">
    <path d="M16 5.2 L27.8 16.9 L23.3 16.9 L16 9 L8.7 16.9 L4.2 16.9 Z" fill="${CREAM}"/>
    <g fill="${EMBER}">
      <circle cx="16" cy="18.2" r="2"/>
      <path d="M13.2 25.8 L13.2 21.7 Q13.2 20.2 14.7 20.2 L17.3 20.2 Q18.8 20.2 18.8 21.7 L18.8 25.8 Z"/>
      <circle cx="9.9" cy="19.6" r="1.6"/>
      <path d="M7.7 25.8 L7.7 22.3 Q7.7 21 9 21 L10.8 21 Q12.1 21 12.1 22.3 L12.1 25.8 Z"/>
      <circle cx="22.1" cy="19.6" r="1.6"/>
      <path d="M19.9 25.8 L19.9 22.3 Q19.9 21 21.2 21 L23 21 Q24.3 21 24.3 22.3 L24.3 25.8 Z"/>
    </g>
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
