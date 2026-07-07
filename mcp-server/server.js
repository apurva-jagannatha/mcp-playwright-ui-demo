import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readdir } from "fs/promises";
import { join } from "path";
import { PLAYWRIGHT_PROJECT_PATH } from "./config.js";
import { exec } from "child_process";
import { promisify } from "util";


const execAsync = promisify(exec);

// Create the MCP server
const server = new McpServer({
  name: "playwright-qa-mcp",
  version: "1.0.0",
});

// Register our first tool
server.registerTool(
  "hello",
  {
    title: "Hello Tool",
    description: "Returns a greeting from the MCP server",
    inputSchema: {
      name: z.string().describe("Your name"),
    },
  },
  
  async ({ name }) => ({
    content: [
      {
        type: "text",
        text: `Hello ${name}! Welcome to your first MCP Server.`,
      },
    ],
  })
);
// Register tool to list Playwright tests
server.registerTool(
  "list_playwright_tests",
  {
    title: "List Playwright Tests",
    description: "Lists all Playwright test files in the project",
    inputSchema: {}
  },

  async () => {

    const testsPath = join(
      PLAYWRIGHT_PROJECT_PATH,
      "tests"
    );

    const files = await readdir(testsPath);

    const testFiles = files.filter(file =>
      file.endsWith(".spec.js")
    );

    return {
      content: [
        {
          type: "text",
          text: testFiles.length > 0
            ? `Available Playwright Tests:\n\n${testFiles.join("\n")}`
            : "No Playwright tests found."
        }
      ]
    };
  }
);

// Register tool to run Playwright tests
server.registerTool(
  "run_playwright_test",
  {
    title: "Run Playwright Test",
    description: "Runs a specific Playwright test file",
    inputSchema: {
      testFile: z.string().describe("Playwright test file name to run")
    },
  },

  async ({ testFile }) => {

    const command = `npx playwright test tests/${testFile}`;

    try {

      const { stdout, stderr } = await execAsync(
        command,
        {
          cwd: PLAYWRIGHT_PROJECT_PATH
        }
      );

      return {
        content: [
          {
            type: "text",
            text: `
Playwright Test Completed Successfully

Output:

${stdout}

${stderr}
            `
          }
        ]
      };

    } catch (error) {

      return {
        content: [
          {
            type: "text",
            text: `
Playwright Test Failed

Error:

${error.stdout || error.message}
            `
          }
        ]
      };
    }
  }
);
// Start the server
const transport = new StdioServerTransport();

await server.connect(transport);

console.error("Playwright QA MCP Server started...");