import { exec } from "child_process";
import { promisify } from "util";
import { PLAYWRIGHT_PROJECT_PATH } from "../config.js";

const execAsync = promisify(exec);

export async function runPlaywrightTest(testFile) {

    const command = `npx playwright test tests/${testFile}`;

    return await execAsync(command, {
        cwd: PLAYWRIGHT_PROJECT_PATH
    });

}

export async function runAllPlaywrightTests() {

    const command = "npx playwright test";

    return await execAsync(command, {
        cwd: PLAYWRIGHT_PROJECT_PATH
    });

}

export async function runPlaywrightTestsByTag(tag) {

    const command = `npx playwright test --grep="${tag}"`;

    return await execAsync(command, {
        cwd: PLAYWRIGHT_PROJECT_PATH
    });

}