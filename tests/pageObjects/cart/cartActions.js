import { CartObjects } from "./cartObjects";

export class Cart {
  constructor(page) {
    this.page = page;
    this.locator = new CartObjects(page);
  }

  async clickOnCheckoutButton() {
    await this.locator.checkoutButton.click();
  }
}
