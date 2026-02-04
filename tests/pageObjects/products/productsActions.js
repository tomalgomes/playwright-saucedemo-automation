import { ProductsObjects } from "./productsObjects";

export class Products {
  constructor(page) {
    this.page = page;
    this.locator = new ProductsObjects(page);
  }

  async clickOnHamburgerMenu() {
    await this.locator.hamburgerMenu.click();
  }

  async clickOnResetAppState() {
    await this.locator.resetAppState.click();
  }

  async clickOnCloseMenu() {
    await this.locator.closeMenu.click();
  }

  async clickOnAddToCartButton() {
    for (let i = 0; i < 3; i++) {
      await this.locator.addToCartButtons.nth(i).click();
    }
  }

  async clickOnShoppingCartButton() {
    await this.locator.shoppingCartButton.click();
  }

  async clickOnLogoutButton() {
    await this.locator.logoutButton.click();
  }
}
