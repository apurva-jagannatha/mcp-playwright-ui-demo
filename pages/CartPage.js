import { expect } from '@playwright/test';

export class CartPage {

    constructor(page) {
        this.page = page;

        this.cartTitle = page.locator('.title');

        this.backpackItem = page.locator('[data-test="inventory-item-name"]')
            .filter({ hasText: 'Sauce Labs Backpack' });

        this.bikeLightItem = page.locator('[data-test="inventory-item-name"]')
            .filter({ hasText: 'Sauce Labs Bike Light' });

        this.checkoutButton = page.locator('#checkout');
    }

    async verifyCartPage() {
        await expect(this.cartTitle).toHaveText('Your Cart');
    }

    async verifyProducts() {
        await expect(this.backpackItem).toBeVisible();
        await expect(this.bikeLightItem).toBeVisible();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}