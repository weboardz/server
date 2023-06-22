import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastify from "fastify";

import { authRoute, boardRoute } from "./routes";

const app = fastify();

app.register(cors, { origin: true });

app.register(jwt, {
  secret: process.env.SECRET || "supersecret",
});

app.setErrorHandler((error, _, reply) => {
  const { statusCode = 500, name, message } = error;
  reply.code(statusCode).send({ name, message });
});

app.register(authRoute, { prefix: "/auth" });
app.register(boardRoute, { prefix: "/board" });

export const main = async (port: number) => {
  try {
    await app.listen({ port });
    console.log(`✅ Server is running on port ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default app;
