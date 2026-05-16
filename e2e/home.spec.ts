import { test, expect } from "@playwright/test";

test("home page shows heading and tagline", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "AgentClinic" })).toBeVisible();
  await expect(page.getByText("wellness platform")).toBeVisible();
});
