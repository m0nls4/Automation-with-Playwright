const { test, expect } = require('@playwright/test'); //global fixtures

test ('assignment Playwright test', async ({page})=> {

await page.goto("https://rahulshettyacademy.com/client/")
const userEmail = page.locator("#userEmail")
const userPassword = page.locator("#userPassword")
const logIn = page.locator("[value='Login']")
const titles = page.locator(".card-body b")

await userEmail.fill("anshika@gmail.com")
await userPassword.type("Iamking@000")
await logIn.click()
await page.waitForLoadState('networkidle')
await titles.allTextContents()
console.log(titles)
//await page.waitForLoadState("networkidle")
//console.log(await page.title());
//await expect(page).toHaveTitle("Google")



});