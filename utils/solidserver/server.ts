import { createComponent } from "solid-js";
import { generateHydrationScript, renderToStream } from "solid-js/web";

import { serve as alephServe, type ServerOptions } from "./alephserve.ts";

import type { SSRContext, SSROptions } from "./types.ts";
import SolidTransformer from "./transformer.ts";

const render = (ctx: SSRContext): ReadableStream | string => {
  const App = ctx.routing[0]?.exports.default; // routes/index.tsx

  if (!App) {
    ctx.setStatus(404);
    return `
    
    <div class="h-screen w-screen flex justify-center items-center bg-gray-500">
    <div class="text-center text-white font-black text-5xl overflow-hidden ">
    
    <p class="">404</p>
    </div>
    </div>

    
    `;
  }
  ctx.headCollection.push(generateHydrationScript());
  const { readable, writable } = new TransformStream();
  renderToStream(
    () => createComponent(App as () => null, {}),
    { nonce: ctx.nonce },
  ).pipeTo(writable);
  return readable;
};

export function serve(
  options?: Omit<ServerOptions, "ssr"> & { ssr?: boolean | SSROptions },
) {
  alephServe({
    ...options,
    loaders: [...(options?.loaders ?? []), new SolidTransformer()],
    ssr: options?.ssr
      ? {
        ...(typeof options.ssr === "object" ? options.ssr : {}),
        render,
      }
      : undefined,
  });
}
