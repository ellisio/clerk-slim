import chalk from "chalk";
import { program } from "commander";

import { registerCommands } from "./commands";
import { exitWithError } from "./lib/errors";
import { version } from "./lib/version";

const main = (argv: string[]) => {
  program.name("snowtrek-cli").version(version);

  registerCommands(program);

  program.on("command:*", () => {
    console.log();
    console.log(chalk.red(`Invalid command: ${program.args.join(" ")}`));
    console.log();
    program.outputHelp();
    process.exit(1);
  });

  program.parse(argv);
};

process.on("unhandledRejection", (rejection) => {
  if (rejection instanceof Error) {
    exitWithError(rejection);
  } else {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    exitWithError(new Error(`Unknown rejection: '${rejection}'`));
  }
});

main(process.argv);
