import { promisify } from "node:util";
import child_process from "node:child_process";

export const execPromisified = promisify(child_process.exec);
