export class ProductsObjects {
  constructor(page) {
    this.page = page;
    this.hamburgerMenu = this.page.getByRole("button", { name: "Open Menu" });
    this.resetAppState = this.page.getByRole("link", { name: "Reset App State" });
    this.closeMenu = this.page.getByRole("button", { name: "Close Menu" });
    this.addToCartButtons = this.page.getByRole("button", { name: "Add to cart" });
    this.shoppingCartButton = this.page.locator("[data-test='shopping-cart-link']");
    this.logoutButton = this.page.getByRole("link", { name: "Logout" });
  }
}
