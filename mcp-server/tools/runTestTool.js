import { z } from "zod";
import { runPlaywrightTest } from "../services/playwrightService.js";

export function registerRunTestTool(server) {

    server.registerTool(
        "run_playwright_test",
        {
            title: "Run Playwright Test",
            description: "Runs a specific Playwright test file",
            inputSchema: {
                testFile: z.string().describe("Playwright test file name")
            }
        },

        async ({ testFile }) => {

            try {

                const { stdout, stderr } =
                    await runPlaywrightTest(testFile);

                return {
                    content: [
                        {
                            type: "text",
                            text:
`Playwright Test Completed Successfully

Output:

${stdout}

${stderr}`
                        }
                    ]
                };

            } catch (error) {

                return {
                    content: [
                        {
                            type: "text",
                            text:
`Playwright Test Failed

${error.stdout || error.message}`
                        }
                    ]
                };

            }

        }

    );

}