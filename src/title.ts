import { Elysia } from "elysia";

const title = new Elysia({ prefix: "/title/:id" })
  .get("/", ({ query }) => `test: ${query.q}`)
  .get("/episodes", ({ query }) => `test: ${query.q}`)
  .get("/cast", ({ query }) => `test: ${query.q}`)
  .get("/reviews", ({ query }) => `test: ${query.q}`)
  .get("/awards", ({ query }) => `test: ${query.q}`)
  .get("/review", ({ query }) => `test: ${query.q}`);

export default title;
