import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function main() {
  const url = process.argv[2] || "http://localhost:3000";
  const prefix = process.argv[3] || "navbar-hero";
  const outDir = path.resolve("./screenshots");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });

  // Desktop (1440px viewport)
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

  // Mobile (375px viewport)
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

  // Mobile full page to verify the complete mobile hero
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
