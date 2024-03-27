import { resolve } from "node:path";
import { cwd } from "node:process";
import debug from "debug";
import { parseFile } from "@swc/core";

const log = debug("bundler");

export async function bundle(entry: string) {
  const resolvedEntry = resolve(cwd(), entry);

  log("Bundling entry:", resolvedEntry);

  const p = await parseFile(resolvedEntry);

  console.dir(p);
}
