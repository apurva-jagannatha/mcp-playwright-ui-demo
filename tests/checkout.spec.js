import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import user from '../test-data/user.json';

test('Add products to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();

    await loginPage.login(user.username, user.password);

    await inventoryPage.verifyInventoryPage();

    await inventoryPage.addBackpackToCart();

    await inventoryPage.addBikeLightToCart();

    await inventoryPage.openCart();

});