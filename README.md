# Playwright UI Automation Framework with Claude MCP

A professional end-to-end UI automation framework built using Playwright, JavaScript, and the Page Object Model (POM). This project demonstrates modern UI automation practices and is being extended with Claude Desktop MCP integration for AI-assisted test generation and execution.

---

## Tech Stack

- Playwright
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)
- Git & GitHub
- Claude Desktop (MCP) *(In Progress)*
- GitHub Actions *(Coming Soon)*

---

## Application Under Test

https://www.saucedemo.com

---

## Project Structure

```
playwright-mcp-demo/
│
├── docs/
│   └── TestPlan.md
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── CheckoutCompletePage.js
│
├── tests/
│   ├── login.spec.js
│   └── checkout.spec.js
│
├── test-data/
│   └── user.json
│
├── utils/
│   └── constants.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Features

- Page Object Model (POM)
- Reusable page classes
- External test data
- End-to-End UI automation
- Clean folder structure
- HTML Test Reports
- Easy to maintain

---

## Test Scenario

1. Login with valid credentials
2. Verify Products page
3. Add products to cart
4. Verify cart
5. Checkout
6. Complete purchase
7. Verify success message
8. Logout

---

## Running the Project

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run login test

```bash
npx playwright test tests/login.spec.js
```

Open HTML Report

```bash
npx playwright show-report
```

---

## Future Enhancements

- Claude Desktop MCP integration
- GitHub Actions CI/CD
- Cross-browser testing
- Parallel execution
- API validation
- Docker support

---

## Author

**Apurva Jagannatha**

QA Automation Engineer

GitHub: https://github.com/apurva-jagannatha
