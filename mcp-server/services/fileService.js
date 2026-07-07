import { readdir } from "fs/promises";
import { join } from "path";
import { PLAYWRIGHT_PROJECT_PATH } from "../config.js";

export async function getPlaywrightTests() {
  const testsPath = join(PLAYWRIGHT_PROJECT_PATH, "tests");

  const files = await readdir(testsPath);

  return files.filter(file => file.endsWith(".spec.js"));
}