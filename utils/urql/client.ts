import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from "@urql/core";

export const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
  // the default:

  exchanges: [
    dedupExchange,
    cacheExchange,
    fetchExchange,
  ],
});
