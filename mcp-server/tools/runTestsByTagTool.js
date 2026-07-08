import { z } from "zod";
import { runPlaywrightTestsByTag } from "../services/playwrightService.js";

export function registerRunTestsByTagTool(server) {

    server.registerTool(
        "run_playwright_tests_by_tag",
        {
            title: "Run Playwright Tests By Tag",
            description: "Runs Playwright tests matching a specific tag",
            inputSchema: {
                tag: z.string().describe("Playwright tag (example: @smoke)")
            }
        },

        async ({ tag }) => {

            try {

                const { stdout, stderr } =
                    await runPlaywrightTestsByTag(tag);

                return {
                    content: [
                        {
                            type: "text",
                            text:
`Playwright Tests (${tag}) Completed Successfully

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
`Playwright Tests (${tag}) Failed

${error.stdout || error.message}`
                        }
                    ]
                };

            }

        }

    );

}