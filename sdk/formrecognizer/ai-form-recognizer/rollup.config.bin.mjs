// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { chmodSync, statSync } from "node:fs";
import MagicString from "magic-string";
import nodeResolve from "@rollup/plugin-node-resolve";
import { readFile } from "node:fs/promises";

// Some magic code to preserve the shebang and set the executable bit on the generated bundle.
const executable = (options = {}) => {
  let fileName;
  const shebangReplacements = new Map();
  return {
    name: "rollup-plugin-executable",
    transform(code, module) {
      let shebang;
      code = code.replace(/^#![^\n]*/, (match) => ((shebang = match), ""));
      if (!shebang) return null;
      shebangReplacements.set(module, shebang);
      return { code, map: null };
    },
    renderChunk(code, chunk, { sourcemap }) {
      const shebang = shebangReplacements.get(chunk.facadeModuleId);
      if (!shebang) return null;
      const s = new MagicString(code);
      s.prepend(`${options.shebang || shebang}\n`);
      return {
        code: s.toString(),
        map: sourcemap ? s.generateMap({ hires: true }) : null,
      };
    },
    generateBundle(options) {
      fileName = options.file;
    },
    writeBundle() {
      if (fileName && process.platform !== "win32") {
        const stat = statSync(fileName);

        // chmod a+x -> 0o111
        chmodSync(fileName, stat.mode | 0o111);
      }
    },
  };
};

const pkg = JSON.parse(await readFile("./package.json", { encoding: "utf-8" }));

/** @type {import('rollup').RollupOptions} */
const config = {
  input: ["dist/esm/bin/gen-model.js"],
  output: {
    format: "cjs",
    file: "dist-bin/gen-model.js",
  },
  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)],
  plugins: [
    executable(),
    nodeResolve({
      preferBuiltins: true,
    }),
  ],
};

export default config;
