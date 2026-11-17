import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function scrollPageToTriggerLazyLoad(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

async function main() {
  const url = process.argv[2] || "http://localhost:3000";
  const prefix = process.argv[3] || "audit";
  const outDir = path.resolve("./screenshots");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });

  // Desktop (1440px)
  const pageDesktop = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await pageDesktop.goto(url, { waitUntil: "networkidle" });
  await scrollPageToTriggerLazyLoad(pageDesktop);
  await pageDesktop.waitForTimeout(1200);
  await pageDesktop.screenshot({
    path: path.join(outDir, `${prefix}-1440px.png`),
    fullPage: false,
  });
  await pageDesktop.screenshot({
    path: path.join(outDir, `${prefix}-1440px-full.png`),
    fullPage: true,
  });

  // Mobile (375px)
  const pageMobile = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  await pageMobile.goto(url, { waitUntil: "networkidle" });
  await scrollPageToTriggerLazyLoad(pageMobile);
  await pageMobile.waitForTimeout(1200);
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
