import sharp from "sharp";
import fs from "fs";

const dir = "public/_cand";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".jpg")).sort();

const cols = 4;
const tw = 320;
const th = 220;
const labelH = 28;
const cellW = tw;
const cellH = th + labelH;
const rows = Math.ceil(files.length / cols);
const W = cols * cellW;
const H = rows * cellH;

const canvas = sharp({
  create: { width: W, height: H, channels: 3, background: "#111" },
});

const composites = [];
for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const col = i % cols;
  const row = Math.floor(i / cols);
  const x = col * cellW;
  const y = row * cellH;
  const thumb = await sharp(`${dir}/${f}`).resize(tw, th, { fit: "cover" }).toBuffer();
  composites.push({ input: thumb, left: x, top: y });
  const label = f.replace(".jpg", "");
  const svg = Buffer.from(
    `<svg width="${tw}" height="${labelH}"><rect width="100%" height="100%" fill="#000"/><text x="6" y="19" font-family="Arial" font-size="15" fill="#8ea884">${label}</text></svg>`
  );
  composites.push({ input: svg, left: x, top: y + th });
}

await canvas.composite(composites).jpeg({ quality: 80 }).toFile("public/_contact_sheet.jpg");
console.log(`contact sheet: ${W}x${H}, ${files.length} images`);
