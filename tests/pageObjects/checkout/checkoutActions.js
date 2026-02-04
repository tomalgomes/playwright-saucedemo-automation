import { CheckoutObjects } from "./checkoutObjects";

export class Checkout {
  constructor(page) {
    this.page = page;
    this.locator = new CheckoutObjects(page);
  }

  async enterFirstName(firstName) {
    await this.locator.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.locator.lastNameInput.fill(lastName);
  }

  async enterZipCode(zipCode) {
    await this.locator.zipCodeInput.fill(zipCode);
  }

  async clickOnContinueButton() {
    await this.locator.continueButton.click();
  }

  async getProductNames() {
    const itemNames = [];
    const countItems = await this.locator.productNames.count();
    for (let i = 0; i < countItems; i++) {
      itemNames.push(await this.locator.productNames.nth(i).textContent());
    }
    return itemNames;
  }

  async getExpectedSubTotal() {
    const countPrices = await this.locator.productPrices.count();
    let expectedSubTotal = 0;
    for (let i = 0; i < countPrices; i++) {
      const priceText = await this.locator.productPrices.nth(i).textContent();
      const priceValue = priceText.replace("$", "");
      expectedSubTotal += Number(priceValue);
    }

    return expectedSubTotal;
  }

  async getTax() {
    const priceText = await this.locator.tax.textContent();
    const priceValue = priceText.replace("Tax: $", "");
    const taxAmount = Number(priceValue);
    return taxAmount;
  }

  async getExpectedTotal() {
    return (await this.getExpectedSubTotal()) + (await this.getTax());
  }

  async getActualTotal() {
    const priceText = await this.locator.totalPrice.textContent();
    const priceValue = priceText.replace("Total: $", "");
    const actualTotal = Number(priceValue);
    return actualTotal;
  }

  async clickOnFinishButton() {
    await this.locator.finishButton.click();
  }

  getSuccessfulOrderMessage() {
    return this.locator.successfulOrderMessage;
  }
}
