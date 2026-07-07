import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { TEST_RESULTS_PATH } from "../config.js";

export async function readLatestFailure() {

    const files = await readdir(TEST_RESULTS_PATH);

    if (files.length === 0) {
        return "No Playwright failures found.";
    }

    const firstFile = files[0];

    const fullPath = join(
        TEST_RESULTS_PATH,
        firstFile
    );

    return await readFile(fullPath, "utf-8");

}