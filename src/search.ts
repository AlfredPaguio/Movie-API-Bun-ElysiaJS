import { Elysia, t } from "elysia";

const search = new Elysia({ prefix: "/search" });

search.guard(
  {
    query: t.Object({
      q: t.String(),
    }),
  },
  (app) =>
    app
      .get("/", ({ query }) => `test: ${query.q}`)
      .get("/movie", ({ query }) => `test: ${query.q}`)
      .get("/tv", ({ query }) => `test: ${query.q}`)
      .get("/person", ({ query }) => `test: ${query.q}`)
      .get("/episode", ({ query }) => `test: ${query.q}`)
      .get("/review", ({ query }) => `test: ${query.q}`)
      .get("/award", ({ query }) => `test: ${query.q}`)
);

export default search;
