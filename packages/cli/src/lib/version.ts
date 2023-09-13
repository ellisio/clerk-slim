import fs from "fs-extra";

import { version as cli } from "../../../../packages/cli/package.json";
import { version as ui } from "../../../../packages/ui/package.json";
import { version as utils } from "../../../../packages/utils/package.json";
import { paths } from "./paths";

export const packageVersions: Record<string, string> = {
  cli: cli,
  ui: ui,
  utils: utils,
};

export function findVersion(): string {
  const pkgContent = fs.readFileSync(paths.resolveOwn("package.json"), "utf8");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return JSON.parse(pkgContent).version as string;
}

export const version = findVersion();
export const isDev = fs.pathExistsSync(paths.resolveOwn("src"));
