import sharp from "sharp";
import fs from "fs";

const names = ["work-fmcg", "work-saas", "work-ai", "work-product", "work-brand", "work-cv"];

for (const name of names) {
  const src = `public/_hires_${name}.jpg`;
  if (!fs.existsSync(src)) {
    console.log(`MISSING ${src}`);
    continue;
  }
  // Cap width at 1600, high-quality mozjpeg for crisp portfolio imagery
  await sharp(src)
    .resize(1600, 1600, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(`public/${name}.jpg`);
  const meta = await sharp(`public/${name}.jpg`).metadata();
  const kb = Math.round(fs.statSync(`public/${name}.jpg`).size / 1024);
  console.log(`${name}.jpg -> ${meta.width}x${meta.height}, ${kb} KB`);
}

// Clean up temporary artifacts
for (const f of fs.readdirSync("public")) {
  if (f.startsWith("_hires_") || f === "_contact_sheet.jpg") {
    fs.rmSync(`public/${f}`);
  }
}
if (fs.existsSync("public/_cand")) fs.rmSync("public/_cand", { recursive: true, force: true });
console.log("cleaned temp files");
