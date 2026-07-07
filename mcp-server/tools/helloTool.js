import { z } from "zod";

export function registerHelloTool(server) {
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
}