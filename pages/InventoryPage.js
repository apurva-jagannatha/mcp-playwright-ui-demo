import { expect } from '@playwright/test';

export class InventoryPage {

    constructor(page) {
        this.page = page;

        this.productsTitle = page.locator('.title');

        this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');

        this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');

        this.cart = page.locator('.shopping_cart_link');
    }

    async verifyInventoryPage() {
        await expect(this.productsTitle).toHaveText('Products');
    }

    async addBackpackToCart() {
        await this.backpack.click();
    }

    async addBikeLightToCart() {
        await this.bikeLight.click();
    }

    async openCart() {
        await this.cart.click();
    }
}