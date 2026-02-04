export class CartObjects {
  constructor(page) {
    this.page = page;
    this.checkoutButton = this.page.getByRole("button", { name: "Checkout" });
  }
}
