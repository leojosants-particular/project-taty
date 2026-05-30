import { test, expect } from "@playwright/test"

test("a landing carrega com hero e seções", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  await expect(page.locator("#servicos")).toBeVisible()
  await expect(page.locator("#contato")).toBeVisible()
})
