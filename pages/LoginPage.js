import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.productsTitle = page.locator('.title');
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccessful() {
        await expect(this.productsTitle).toHaveText('Products');
    }
}