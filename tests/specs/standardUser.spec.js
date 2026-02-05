import { expect, test } from "@playwright/test";
import { Login } from "../pageObjects/login/loginActions";
import { Products } from "../pageObjects/products/productsActions";
import { Cart } from "../pageObjects/cart/cartActions";
import { Checkout } from "../pageObjects/checkout/checkoutActions";

test.describe("Purchase Journey with Three Products", () => {
  const firstName = "Peter",
    lastName = "Pan",
    zipCode = "Neverland";

  let login, product, cart, checkout;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    product = new Products(page);
    cart = new Cart(page);
    checkout = new Checkout(page);
    await page.goto("https://www.saucedemo.com/");
  });
  test("Successful purchase with standard_user", async ({ page }) => {
    await login.enterUserName("standard_user");
    await login.enterPassword("secret_sauce");
    await login.clickOnLoginButton();

    await product.clickOnHamburgerMenu();
    await product.clickOnResetAppState();
    await product.clickOnCloseMenu();
    await product.clickOnAddToCartButton();
    await product.clickOnShoppingCartButton();

    await cart.clickOnCheckoutButton();

    await checkout.enterFirstName(firstName);
    await checkout.enterLastName(lastName);
    await checkout.enterZipCode(zipCode);
    await checkout.clickOnContinueButton();
    const productNames = await checkout.getProductNames();
    expect(productNames).toEqual([
      "Sauce Labs Backpack",
      "Sauce Labs Bolt T-Shirt",
      "Sauce Labs Onesie",
    ]);
    const expectedTotal = await checkout.getExpectedTotal();
    const actualTotal = await checkout.getActualTotal();
    expect(actualTotal).toBeCloseTo(expectedTotal, 2);
    await checkout.clickOnFinishButton();
    await expect(checkout.getSuccessfulOrderMessage()).toHaveText("Thank you for your order!");

    await product.clickOnHamburgerMenu();
    await product.clickOnResetAppState();
    await product.clickOnLogoutButton();
  });
});
