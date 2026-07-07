import { getPlaywrightTests } from "../services/fileService.js";

export function registerListTestsTool(server) {
  server.registerTool(
    "list_playwright_tests",
    {
      title: "List Playwright Tests",
      description: "Lists all Playwright test files in the project",
      inputSchema: {},
    },
    async () => {
      const testFiles = await getPlaywrightTests();

      return {
        content: [
          {
            type: "text",
            text:
              testFiles.length > 0
                ? `Available Playwright Tests:\n\n${testFiles.join("\n")}`
                : "No Playwright tests found.",
          },
        ],
      };
    }
  );
}