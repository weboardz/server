import { boardController } from "@/adapters/controllers";
import { FastifyInstance } from "fastify";

const boardRoute = async (app: FastifyInstance) => {
  app.post("/", boardController.createBoard);
};

export { boardRoute };
