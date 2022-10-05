import { transform } from "@babel";
import babelPresetSolid from "babel-preset-solid";
import solidRefresh from "solid-refresh/babel";
import type {
  ModuleLoader,
  ModuleLoaderEnv,
  ModuleLoaderOutput,
} from "./types.ts";

export default class SolidTransformer implements ModuleLoader {
  test(path: string): boolean {
    return path.endsWith(".tsx") || path.endsWith(".jsx");
  }

  load(
    specifier: string,
    content: string,
    env: ModuleLoaderEnv,
  ): ModuleLoaderOutput {
    const { code, map } = transform(content, {
      presets: [
        [babelPresetSolid, {
          generate: env.ssr ? "ssr" : "dom",
          hydratable: env.ssr || !env.spaMode,
        }],
        ["typescript", { onlyRemoveTypeImports: true }],
      ],
      plugins: env.isDev && !env.ssr
        ? [[solidRefresh, { bundler: "vite" }]]
        : [],
      filename: specifier,
    });
    return {
      code: code ?? "",
      lang: "js",
      map: map ? JSON.stringify(map) : undefined,
    };
  }
}
