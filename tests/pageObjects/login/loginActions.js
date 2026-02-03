import { LoginObjects } from "./loginObjects";

export class Login {
  constructor(page) {
    this.page = page;
    this.locator = new LoginObjects(page);
  }

  async enterUserName(username) {
    await this.locator.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.locator.passwordInput.fill(password);
  }

  async clickOnLoginButton() {
    await this.locator.loginButton.click();
  }

  async isErrorMessageVisible() {
    const isVisible = await this.locator.loginErrorMessage.isVisible();
    return isVisible;
  }
}
