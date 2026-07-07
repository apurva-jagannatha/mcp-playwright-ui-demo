import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readdir } from "fs/promises";
import { join } from "path";
import { PLAYWRIGHT_PROJECT_PATH } from "./config.js";


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
// Start the server
const transport = new StdioServerTransport();

await server.connect(transport);

console.error("Playwright QA MCP Server started...");