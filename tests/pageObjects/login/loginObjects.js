export class LoginObjects {
  constructor(page) {
    this.page = page;
    this.usernameInput = this.page.getByRole("textbox", { name: "Username" });
    this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
    this.loginButton = this.page.getByRole("button", { name: "Login" });
    this.loginErrorMessage = this.page.getByText(
      "Epic sadface: Sorry, this user has been locked out.",
      { exact: true },
    );
  }
}
