export class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
    }

    async enterCustomerDetails(firstName, lastName, zipCode) {

        await this.firstName.fill(firstName);

        await this.lastName.fill(lastName);

        await this.zipCode.fill(zipCode);
    }

    async continueCheckout() {

        await this.continueButton.click();

    }

}