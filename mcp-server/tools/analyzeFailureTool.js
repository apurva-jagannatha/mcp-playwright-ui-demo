import { readLatestFailure } from "../services/reportService.js";

export function registerAnalyzeFailureTool(server) {

    server.registerTool(
        "analyze_playwright_failure",
        {
            title: "Analyze Playwright Failure",
            description: "Reads Playwright failure details",
            inputSchema: {}
        },

        async () => {

            try {

                const failure = await readLatestFailure();

                return {
                    content: [
                        {
                            type: "text",
                            text: `Playwright Failure Details\n\n${failure}`
                        }
                    ]
                };

            } catch (error) {

                return {
                    content: [
                        {
                            type: "text",
                            text: `Unable to analyze failures:\n${error.message}`
                        }
                    ]
                };

            }

        }

    );

}