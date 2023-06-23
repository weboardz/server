import { boardController } from "@/adapters/controllers";
import { FastifyInstance } from "fastify";

import { CreateBoardJsonSchema } from "@/schemas";

const boardRoute = async (app: FastifyInstance) => {
  app.addHook("preHandler", async (req) => await req.jwtVerify());

  app.post(
    "/",
    { schema: { body: CreateBoardJsonSchema } },
    boardController.createBoard
  );
};

export { boardRoute };
