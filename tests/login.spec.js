import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import user from '../test-data/user.json';

test('Successful login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(user.username, user.password);

    await loginPage.verifyLoginSuccessful();

});