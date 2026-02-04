import { test, expect } from "@playwright/test";
import { Login } from "../pageObjects/login/loginActions";

test.describe("Saucedemo Login Feature", () => {
  test("Login error verification with locked_out_user", async ({ page }) => {
    const login = new Login(page);
    await page.goto("https://www.saucedemo.com/");
    await login.enterUserName("locked_out_user");
    await login.enterPassword("secret_sauce");
    await login.clickOnLoginButton();
    await expect(login.getErrorMessage()).toHaveText(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  });
});
