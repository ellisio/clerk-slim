import { assertError, ForwardedError } from "@snowtrek/errors";
import { execFile as execFileCb } from "child_process";
import { promisify } from "util";

import { ExitCodeError } from "./errors";

export const execFile = promisify(execFileCb);

export async function runPlain(cmd: string, ...args: string[]) {
  try {
    const { stdout } = await execFile(cmd, args, { shell: true });
    return stdout.trim();
  } catch (error) {
    assertError(error);
    if ("stderr" in error) {
      process.stderr.write(error.stderr as Buffer);
    }
    if (typeof error.code === "number") {
      throw new ExitCodeError(error.code, [cmd, ...args].join(" "));
    }
    throw new ForwardedError("Unknown execution error", error);
  }
}
