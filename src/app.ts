import cors from "@fastify/cors";
import fastify from "fastify";
import { userRoute } from "./routes";

const app = fastify();

app.register(cors, { origin: true });

app.setErrorHandler((error, _, reply) => {
  console.error(error);
  const { statusCode = 500, name, message } = error;
  reply.code(statusCode).send({ name, message });
});

app.register(userRoute);

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
