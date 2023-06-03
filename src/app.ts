import cors from "@fastify/cors";
import fastify from "fastify";

const app = fastify();

app.register(cors, { origin: true });

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
