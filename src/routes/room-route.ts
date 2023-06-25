import { FastifyInstance } from "fastify";

import { roomController } from "@/adapters/controllers";
import { tryEnterBoardRoom } from "@/usecases";

const roomRoute = async (app: FastifyInstance) => {
  app.addHook("preHandler", async (request) => {
    const { boardId } = request.params as { boardId: string };
    await tryEnterBoardRoom(boardId, async () => {
      await request.jwtVerify();
      return request.user.sub;
    });
  });

  app.get("/:boardId", { websocket: true }, async (con, req) => {
    roomController.execute(con, req, app);
  });
};

export { roomRoute };
