import { PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";

const setupDB = new Elysia().decorate("db", new PrismaClient());

export default setupDB;
