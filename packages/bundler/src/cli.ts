import {} from "node:path";
import { cac } from "cac";
import { bundle } from "./index.js";

const cli = cac("bundler");

cli
  .command("bundle <entry>", "Bundle your app")
  // .option("--foo", "Foo option")
  .action(async (entry: string) => {
    await bundle(entry);
  });

cli.help();
cli.parse();
