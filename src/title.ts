import { Elysia } from "elysia";
import setupDB from "./setupDB";

const title = new Elysia({ prefix: "/title/:id" })
  .use(setupDB)
  .get("/", async ({ params, db }) => {
    return db.movie.findUnique({
      where: {
        id: parseInt(params.id, 10),
      },
    });
  })
  .get("/episodes", async ({ params, db }) => {
    return db.episode.findMany({
      where: {
        movieId: parseInt(params.id, 10),
      },
    });
  })
  .get("/cast", async ({ params, db }) => {
    return db.person.findMany({
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
    return db.review.findMany({
      where: {
        movieId: parseInt(params.id, 10),
      },
    });
  })
  .get("/awards", async ({ params, db }) => {
    return db.award.findMany({
      where: {
        movieId: parseInt(params.id, 10),
      },
    });
  });

export default title;
