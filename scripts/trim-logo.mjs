import sharp from "sharp";

const src = "public/logoUpdated.png";

const img = sharp(src);
const meta = await img.metadata();
console.log("source:", meta.width, "x", meta.height, "channels:", meta.channels);

// Sample the top-left corner to learn the background color/alpha
const { data, info } = await sharp(src)
  .raw()
  .toBuffer({ resolveWithObject: true });
const ch = info.channels;
const corner = [];
for (let c = 0; c < ch; c++) corner.push(data[c]);
console.log("top-left pixel:", corner);

// Trim uniform border (works for white or transparent), then export a tight logo
await sharp(src)
  .trim({ threshold: 15 })
  .toFile("public/logo-mark.png");

const trimmed = await sharp("public/logo-mark.png").metadata();
console.log("trimmed:", trimmed.width, "x", trimmed.height);
