const { test, expect } = require('@playwright/test'); //global fixtures

test ('Browser Context Playwright test', async ({browser})=> {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.google.com/");
console.log(await page.title());
await expect(page).toHaveTitle("Google");
});

test.only ('Page Playwright test', async ({page})=> {
    
    await page.goto("https://www.brotecs.com/");
   console.log(await page.title());
   await expect(page).toHaveTitle("Brotecs Technologies – An R&D and Software Development Company");
});