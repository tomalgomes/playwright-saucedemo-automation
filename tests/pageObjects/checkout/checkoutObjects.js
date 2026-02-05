export class CheckoutObjects {
  constructor(page) {
    this.page = page;
    this.firstNameInput = this.page.getByRole("textbox", { name: "First Name" });
    this.lastNameInput = this.page.getByRole("textbox", { name: "Last Name" });
    this.zipCodeInput = this.page.getByRole("textbox", { name: "Zip/Postal Code" });
    this.continueButton = this.page.getByRole("button", { name: "Continue" });
    this.productNames = this.page.locator(".inventory_item_name");
    this.productPrices = this.page.locator(".inventory_item_price");
    this.tax = this.page.locator(".summary_tax_label");
    this.totalPrice = this.page.locator(".summary_total_label");
    this.finishButton = this.page.getByRole("button", { name: "Finish" });
    this.successfulOrderMessage = this.page.locator("[data-test='complete-header']");
    
  }
}
