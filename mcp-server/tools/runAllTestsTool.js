import { runAllPlaywrightTests } from "../services/playwrightService.js";

export function registerRunAllTestsTool(server) {

    server.registerTool(
        "run_all_playwright_tests",
        {
            title: "Run All Playwright Tests",
            description: "Runs all Playwright tests in the project",
            inputSchema: {}
        },

        async () => {

            try {

                const { stdout, stderr } =
                    await runAllPlaywrightTests();

                return {
                    content: [
                        {
                            type: "text",
                            text:
`All Playwright Tests Completed Successfully

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
`Playwright Test Execution Failed

${error.stdout || error.message}`
                        }
                    ]
                };

            }

        }

    );

}