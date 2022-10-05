//@ts-nocheck unocss type config issues
import { serve } from "./utils/solidserver/server.ts";
import routes from "./routes/_export.ts";
import presetuno from "./unocss.config.ts";

serve({
  baseUrl: import.meta.url,
  router: { routes },
  ssr: true,
  unocss: { resetCSS: presetuno.resetCSS, presets: [...presetuno.presets] },
});
