import { Elysia, t } from "elysia";
import setupDB from "./setupDB";

const search = new Elysia({ prefix: "/search" }).use(setupDB);

search.get("/", async ({ db }) => db.movie.findMany());

search.guard(
  {
    query: t.Object({
      q: t.String(),
    }),
  },
  (app) =>
    app

      .get("/movie", async ({ query, db }) => {
        return await db.movie.findMany({
          where: {
            title: {
              contains: query.q,
            },
          },
        });
      })
      .get("/tv", async ({ query, db }) => {
        return await db.movie.findMany({
          where: {
            title: {
              contains: query.q,
            },
            type: "series",
          },
        });
      })
      .get("/person", async ({ query, db }) => {
        return await db.person.findMany({
          where: {
            name: {
              contains: query.q,
            },
          },
        });
      })
      .get("/episode", async ({ query, db }) => {
        return await db.episode.findMany({
          where: {
            title: {
              contains: query.q,
            },
          },
        });
      })
      .get("/review", async ({ query, db }) => {
        return await db.review.findMany({
          where: {
            comment: {
              contains: query.q,
            },
          },
        });
      })
      .get("/award", async ({ query, db }) => {
        return await db.award.findMany({
          where: {
            name: {
              contains: query.q,
            },
          },
        });
      })
);

export default search;
