// Renders post HTML files to 1080x1350 images with an installed Chrome.
// Usage (from this kit folder): node render.mjs posts\2026-11-25-a.html [more.html ...]
// Writes <name>.png AND <name>.jpg (the JPEG is what Instagram's API accepts) next to each HTML file.
// Prints "ok" or "PROBLEM" per file. Exit code 2 if any file has a problem.
// Chrome: CHROME_PATH environment variable, else the usual Windows install path.
import puppeteer from "puppeteer-core";
import path from "node:path";
import fs from "node:fs";
import { pathToFileURL } from "node:url";

const files = process.argv.slice(2);
if (!files.length) { console.error("Give at least one .html file"); process.exit(1); }
const candidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);
const executablePath = candidates.find((p) => fs.existsSync(p));
if (!executablePath) { console.error("Chrome not found; set CHROME_PATH"); process.exit(1); }
const browser = await puppeteer.launch({ executablePath, headless: "new", args: ["--hide-scrollbars", "--allow-file-access-from-files", "--no-sandbox"] });
let failed = 0;
try {
  for (const f of files) {
    const abs = path.resolve(f);
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(abs).href, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    // Fail loudly if text or images overflow the canvas, an image is missing or a font did not load.
    const problems = await page.evaluate(() => {
      const out = [];
      const post = document.querySelector(".post");
      if (!post) return ["no .post element"];
      if (post.scrollHeight > 1350 || post.scrollWidth > 1080) out.push(`content overflows: ${post.scrollWidth}x${post.scrollHeight}`);
      for (const img of document.images) if (!img.complete || img.naturalWidth === 0) out.push("image failed to load: " + img.getAttribute("src"));
      if (!document.fonts.check("800 100px 'Plus Jakarta Sans'")) out.push("Plus Jakarta Sans font not loaded");
      if (!document.fonts.check("600 40px 'Inter'")) out.push("Inter font not loaded");
      return out;
    });
    const png = abs.replace(/\.html?$/i, ".png");
    const jpg = abs.replace(/\.html?$/i, ".jpg");
    const clip = { x: 0, y: 0, width: 1080, height: 1350 };
    await page.screenshot({ path: png, clip });
    await page.screenshot({ path: jpg, clip, type: "jpeg", quality: 92 });
    await page.close();
    if (problems.length) { failed++; console.log("PROBLEM", png, "->", problems.join("; ")); }
    else console.log("ok", jpg, fs.statSync(jpg).size, "bytes");
  }
} finally {
  await browser.close();
}
process.exit(failed ? 2 : 0);
