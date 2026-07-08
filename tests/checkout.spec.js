import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

import user from '../test-data/user.json';

test('@regression Add products to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await loginPage.navigate();

    await loginPage.login(user.username, user.password);

    await inventoryPage.verifyInventoryPage();

    await inventoryPage.addBackpackToCart();

    await inventoryPage.addBikeLightToCart();

    await inventoryPage.openCart();

    await cartPage.verifyCartPage();

    await cartPage.verifyProducts();
    
    await cartPage.clickCheckout();

    await checkoutPage.enterCustomerDetails(
    user.firstName,
    user.lastName,
    user.zipCode
);

await checkoutPage.continueCheckout();

await checkoutCompletePage.finishOrder();

await checkoutCompletePage.verifyOrderCompleted();

});