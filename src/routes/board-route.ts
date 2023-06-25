import { FastifyInstance } from "fastify";

import { boardController } from "@/adapters/controllers";
import {
  BoardIdJsonSchema,
  CreateBoardJsonSchema,
  UpdateBoardJsonSchema,
} from "@/schemas";

const boardRoute = async (app: FastifyInstance) => {
  app.addHook("preValidation", async (req) => await req.jwtVerify());

  app.post(
    "/",
    { schema: { body: CreateBoardJsonSchema } },
    boardController.createBoard
  );

  app.delete(
    "/:boardId",
    { schema: { params: BoardIdJsonSchema } },
    boardController.deleteBoard
  );

  app.patch(
    "/:boardId",
    { schema: { body: UpdateBoardJsonSchema, params: BoardIdJsonSchema } },
    boardController.updateBoard
  );
};

export { boardRoute };
