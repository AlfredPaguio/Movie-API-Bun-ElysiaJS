import { Elysia } from "elysia";
import search from "./search";
import title from "./title";
import swagger from "@elysiajs/swagger";

const app = new Elysia().get("/", () => "Hello Elysia");
app.use(swagger());
app.use(search);
app.use(title);
app.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
