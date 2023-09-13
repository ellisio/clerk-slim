import os from "os";

import { runPlain } from "../lib/run";

const info = async () => {
  const yarnVersion = await runPlain("yarn --version");

  console.log(`OS:   ${os.type()} ${os.release()} - ${os.platform()}/${os.arch()}`);
  console.log(`node: ${process.version}`);
  console.log(`yarn: ${yarnVersion}`);
};

export default info;
