import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function main() {
  const url = process.argv[2] || "http://localhost:3000";
  const prefix = process.argv[3] || "audit";
  const outDir = path.resolve("./screenshots");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });

  // Desktop (1440px viewport + fullPage)
  const pageDesktop = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await pageDesktop.goto(url, { waitUntil: "networkidle" });
  await pageDesktop.waitForTimeout(1000);
  await pageDesktop.screenshot({
    path: path.join(outDir, `${prefix}-1440px.png`),
    fullPage: false,
  });
  await pageDesktop.screenshot({
    path: path.join(outDir, `${prefix}-1440px-full.png`),
    fullPage: true,
  });

  // Mobile (375px viewport + fullPage)
  const pageMobile = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  await pageMobile.goto(url, { waitUntil: "networkidle" });
  await pageMobile.waitForTimeout(1000);
  await pageMobile.screenshot({
    path: path.join(outDir, `${prefix}-375px.png`),
    fullPage: false,
  });
  await pageMobile.screenshot({
    path: path.join(outDir, `${prefix}-375px-full.png`),
    fullPage: true,
  });

  console.log(`Saved screenshots for ${prefix}`);
  await browser.close();
}

main().catch((err) => {
  console.error("Screenshot error:", err);
  process.exit(1);
});
