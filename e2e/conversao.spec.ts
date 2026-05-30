import { test, expect } from "@playwright/test"

test("CTA dos universos aponta para o WhatsApp", async ({ page }) => {
  await page.goto("/")
  const cta = page.getByRole("link", { name: /agendar unhas/i })
  await expect(cta).toHaveAttribute("href", /https:\/\/wa\.me\//)
})

test("filtro da galeria reduz as imagens", async ({ page }) => {
  await page.goto("/")
  const todas = await page.locator("#galeria img").count()
  await page.getByRole("button", { name: /^doces$/i }).click()
  const doces = await page.locator("#galeria img").count()
  expect(doces).toBeLessThanOrEqual(todas)
  expect(doces).toBeGreaterThan(0)
})

test("agendamento rápido valida nome obrigatório", async ({ page }) => {
  await page.goto("/")
  await page.locator("#contato").scrollIntoViewIfNeeded()
  await page.getByRole("button", { name: /enviar pelo whatsapp/i }).click()
  await expect(page.getByText(/informe seu nome/i)).toBeVisible()
})

test("botão voltar ao topo aparece após rolar", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("button", { name: /voltar ao topo/i })).toBeHidden()
  await page.mouse.wheel(0, 2000)
  await expect(page.getByRole("button", { name: /voltar ao topo/i })).toBeVisible()
})
