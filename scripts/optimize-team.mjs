import sharp from "sharp";

const jobs = [
  { src: "public/sajeela safder_photo.jpeg", out: "public/team-sajeela.jpg", format: "jpg" },
  { src: "public/samia_maqsood_photo.png", out: "public/team-samia.png", format: "png" },
  { src: "public/shaqat_ali_pic.jpg", out: "public/team-shafqat.jpg", format: "jpg" },
];

for (const job of jobs) {
  const meta = await sharp(job.src).metadata();
  // Square crop, focused toward the top so faces stay in frame
  let pipeline = sharp(job.src).resize(720, 720, {
    fit: "cover",
    position: "top",
  });
  if (job.format === "jpg") {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  } else {
    pipeline = pipeline.png({ quality: 82, compressionLevel: 9 });
  }
  await pipeline.toFile(job.out);
  const outMeta = await sharp(job.out).metadata();
  console.log(
    `${job.src} (${meta.width}x${meta.height}) -> ${job.out} (${outMeta.width}x${outMeta.height}, ${outMeta.size ?? "?"} bytes)`
  );
}
