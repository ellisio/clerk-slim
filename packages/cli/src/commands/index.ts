import { assertError } from "@snowtrek/errors";
import { Command } from "commander";

import { exitWithError } from "../lib/errors";

export function registerCommands(program: Command) {
  program
    .command("info")
    .description("Show helpful information for debugging and reporting bugs")
    .action(lazy(() => import("./info").then((m) => m.default)));
}

// Wraps an action function so that it always exits and handles errors
function lazy(
  getActionFunc: () => Promise<(...args: any[]) => Promise<void>>
): (...args: any[]) => Promise<void> {
  return async (...args: any[]) => {
    try {
      const actionFunc = await getActionFunc();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      await actionFunc(...args);

      process.exit(0);
    } catch (error) {
      assertError(error);
      exitWithError(error);
    }
  };
}
