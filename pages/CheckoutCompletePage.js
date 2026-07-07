import { expect } from '@playwright/test';
import { SUCCESS_MESSAGE } from '../utils/constants';

export class CheckoutCompletePage {

    constructor(page) {

        this.page = page;

        this.finishButton = page.locator('#finish');

        this.successMessage = page.locator('.complete-header');

    }

    async finishOrder() {

        await this.finishButton.click();

    }

    async verifyOrderCompleted() {

        //await expect(this.successMessage).toHaveText('Thank you for your order!');
        await expect(this.successMessage)
        .toHaveText(SUCCESS_MESSAGE);

    }

}