import dev from "aleph/server/dev.ts";

dev({
  baseUrl: import.meta.url,
  // To generate the `./routes/_export.ts` module for serverless env
  // that doesn't support dynamic import.
  generateExportTs: true,
});
