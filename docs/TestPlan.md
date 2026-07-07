# Test Plan

## Project
Playwright End-to-End Automation using SauceDemo

## Objective
Automate the complete purchase flow using Playwright and the Page Object Model (POM).

## Application Under Test
https://www.saucedemo.com

## Browser
- Chromium

## Test Scenario

1. Launch the application.
2. Login with valid credentials.
3. Verify the Products page is displayed.
4. Add "Sauce Labs Backpack" to the cart.
5. Add "Sauce Labs Bike Light" to the cart.
6. Open the shopping cart.
7. Verify both products are present.
8. Proceed to checkout.
9. Enter:
   - First Name
   - Last Name
   - Zip Code
10. Continue to the overview page.
11. Verify the order summary.
12. Click Finish.
13. Verify the success message: "Thank you for your order!"
14. Logout.

## Expected Result
The user successfully completes the purchase and receives the confirmation message.