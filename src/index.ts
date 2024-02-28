import { Elysia } from "elysia";
import search from "./search";
import title from "./title";

const app = new Elysia().get("/", () => "Hello Elysia");

app.use(search).use(title);
app.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
