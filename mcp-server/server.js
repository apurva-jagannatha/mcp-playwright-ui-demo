import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

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

// Start the server
const transport = new StdioServerTransport();

await server.connect(transport);

console.error("Playwright QA MCP Server started...");