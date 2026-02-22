import puppeteer from "puppeteer-core";
import { resolve } from "path";

const root = resolve(import.meta.dir, "..");
const chromePath =
  process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "google-chrome";

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
});

const page = await browser.newPage();
await page.goto(`file://${root}/cv.html`, { waitUntil: "networkidle0" });

await page.pdf({
  path: `${root}/cv/cv-frank-schroeder-2026-v1.pdf`,
  format: "A4",
  printBackground: true,
  displayHeaderFooter: false,
  preferCSSPageSize: true,
});

await browser.close();
console.log("PDF generated: cv/cv-frank-schroeder-2026-v1.pdf");
