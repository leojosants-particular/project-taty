import { test, expect } from "@playwright/test"

test("a página carrega e mostra a marca", async ({ page }) => {
  await page.goto("/")
  await expect(
    page.getByRole("heading", { name: /lp taty/i }),
  ).toBeVisible()
})
