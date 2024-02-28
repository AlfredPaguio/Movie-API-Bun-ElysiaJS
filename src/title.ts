import { Elysia } from "elysia";
import setupDB from "./setupDB";

const title = new Elysia({ prefix: "/title/:id" })
  .use(setupDB)
  .get("/", async ({ params, db }) => {
    return await db.movie.findUnique({
      where: {
        id: parseInt(params.id, 10),
      },
    });
  })
  .get("/episodes", async ({ params, db }) => {
    return await db.episode.findMany({
      where: {
        movieId: parseInt(params.id, 10),
      },
    });
  })
  .get("/cast", async ({ params, db }) => {
    return await db.person.findMany({
      where: {
        movies: {
          some: {
            id: parseInt(params.id, 10),
          },
        },
      },
    });
  })
  .get("/reviews", async ({ params, db }) => {
    return await db.review.findMany({
      where: {
        movieId: parseInt(params.id, 10),
      },
    });
  })
  .get("/awards", async ({ params, db }) => {
    return await db.award.findMany({
      where: {
        movieId: parseInt(params.id, 10),
      },
    });
  });

export default title;
