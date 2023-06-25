import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import websocket from "@fastify/websocket";
import fastify from "fastify";

import { authRoute, boardRoute, roomRoute } from "./routes";

const app = fastify();

app.register(cors, { origin: true });
app.register(websocket, { options: { clientTracking: true } });
app.register(jwt, { secret: process.env.SECRET ?? "supersecret" });

app.setErrorHandler((error, _, reply) => {
  const { statusCode = 500, name, message } = error;
  reply.code(statusCode).send({ name, message });
});

app.register(authRoute, { prefix: "/auth" });
app.register(roomRoute, { prefix: "/room" });
app.register(boardRoute, { prefix: "/board" });

export const startServerOnPort = async (port: number) => {
  try {
    await app.listen({ port });
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default app;
