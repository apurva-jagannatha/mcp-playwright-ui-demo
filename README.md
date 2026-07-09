# 🚀 Playwright QA MCP Server

An AI-powered Playwright Automation Framework integrated with the Model Context Protocol (MCP), enabling Claude Desktop to discover, execute, and analyze Playwright tests using natural language.

## 🎥 Project Demo

Watch the framework in action:

▶️ Demo Video

https://youtu.be/Evw6y4B2UGY

## 📌 Overview

This project demonstrates how Artificial Intelligence can enhance Software Test Automation by integrating Playwright with a custom MCP Server.

Instead of executing Playwright commands manually, users can interact with Claude Desktop using natural language to:

* Discover available Playwright tests
* Execute individual Playwright tests
* Execute the complete test suite
* Execute tests by tag (e.g. `@smoke`, `@regression`)
* Analyze Playwright test failures

The project follows a clean, modular architecture using a Service Layer and Tool Layer, making it scalable and maintainable.

---

# ✨ Features

## AI-Powered Test Discovery

Ask Claude:

> List my Playwright tests

Claude returns all available Playwright test files.

---

## Run Individual Playwright Tests

Example:

> Run checkout.spec.js

The MCP Server executes:

```bash
npx playwright test tests/checkout.spec.js
```

---

## Run Complete Test Suite

Example:

> Run all Playwright tests

The MCP Server executes:

```bash
npx playwright test
```

---

## Run Tests by Tag

Supports Playwright tags such as:

* @smoke
* @regression

Example:

> Run smoke tests

The MCP Server executes:

```bash
npx playwright test --grep="@smoke"
```

---

## Analyze Test Failures

Reads Playwright failure reports and summarizes failures for quick troubleshooting.

---

# 🏗 Project Architecture

```
                           Claude Desktop
                                  │
                                  │
                                  ▼
                   Playwright QA MCP Server
                                  │
          ┌───────────────────────┴──────────────────────┐
          │                                              │
          ▼                                              ▼
      Tools Layer                                  Services Layer
          │                                              │
          ├── helloTool.js                              ├── playwrightService.js
          ├── listTestsTool.js                          ├── reportService.js
          ├── runTestTool.js                            └── fileService.js
          ├── runAllTestsTool.js
          ├── runTestsByTagTool.js
          └── analyzeFailureTool.js
                                  │
                                  ▼
                    Playwright Automation Framework
                                  │
                                  ▼
                          Browser Execution
```
---

# 📂 Project Structure

```
mcp-server/
│
├── server.js
├── config.js
│
├── tools/
│   ├── helloTool.js
│   ├── listTestsTool.js
│   ├── runTestTool.js
│   ├── runAllTestsTool.js
│   ├── runTestsByTagTool.js
│   └── analyzeFailureTool.js
│
└── services/
    ├── playwrightService.js
    └── reportService.js
```

---

# 🛠 Technologies Used

* Playwright
* Node.js
* JavaScript (ES Modules)
* Model Context Protocol (MCP)
* Claude Desktop
* Zod
* Git
* GitHub

---

# 💡 Design Principles

* Modular Architecture
* Single Responsibility Principle (SRP)
* Separation of Concerns
* Reusable Service Layer
* Reusable MCP Tools
* Clean Project Structure

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/apurva-jagannatha/mcp-playwright-ui-demo.git
```

## Install Dependencies

```bash
npm install
```

## Install Playwright

```bash
npx playwright install
```

## Start MCP Server

```bash
node mcp-server/server.js
```

Configure Claude Desktop to point to the MCP server and start interacting with your Playwright project using natural language.

---

# 📋 Example Prompts

* List my Playwright tests
* Run checkout.spec.js
* Run all Playwright tests
* Run Playwright tests with tag @smoke
* Analyze Playwright failures
---
🧩 Tools Layer

Instead of embedding all logic inside server.js, each capability is implemented as an independent MCP Tool.

Each tool exposes one responsibility to Claude Desktop.

| Tool                  | Responsibility                           |
| --------------------- | ---------------------------------------- |
| helloTool.js          | Verifies the MCP Server is running       |
| listTestsTool.js      | Lists available Playwright test files    |
| runTestTool.js        | Executes an individual Playwright test   |
| runAllTestsTool.js    | Executes the complete Playwright suite   |
| runTestsByTagTool.js  | Executes tests using Playwright tags     |
| analyzeFailureTool.js | Reads and summarizes Playwright failures |

#Benefits
Single Responsibility Principle
Easy to extend
Easy to test
Cleaner server.js
Better maintainability


---

# 🔮 Future Enhancements

* AI-generated Playwright tests from user stories
* AI-generated Page Object Models
* HTML report summarization
* Automatic Jira bug report generation
* Flaky test analysis
* Test data generation using AI
* CI/CD integration with GitHub Actions

---

# 👨‍💻 Author

**Apurva Jagannatha**

QA Automation Engineer | API Testing | Playwright | MCP | AI for Test Automation

GitHub:
https://github.com/apurva-jagannatha

LinkedIn:
https://www.linkedin.com/in/apurva-j-b2820018/

