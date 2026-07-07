import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";


import { registerHelloTool } from "./tools/helloTool.js";
import { registerListTestsTool } from "./tools/listTestsTool.js";
import { registerRunTestTool } from "./tools/runTestTool.js";
import { registerAnalyzeFailureTool } from "./tools/analyzeFailureTool.js";

// Create the MCP server
const server = new McpServer({
  name: "playwright-qa-mcp",
  version: "1.0.0",
});

registerHelloTool(server);
registerListTestsTool(server);
registerRunTestTool(server);
registerAnalyzeFailureTool(server);


// Register tool to list Playwright tests

// Register tool to run Playwright tests


// Register tool to analyze Playwright failures

    




// Start the server

const transport = new StdioServerTransport();

await server.connect(transport);

console.error("Playwright QA MCP Server started...");