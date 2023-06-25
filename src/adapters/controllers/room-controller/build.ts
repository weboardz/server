import { WsMessageZodSchema } from "@/schemas";
import { getBoardElements, updateBoardElement } from "@/usecases";

import { WebSocketControllerAdapter } from "../types";
import { IRoomController } from "./types";

const buildRoomController = (
  adapter: WebSocketControllerAdapter
): IRoomController => {
  return {
    execute: async (con, req, app) => {
      const {
        connection,
        request: {
          userId,
          data: { boardId },
        },
      } = adapter<{ boardId: string }>(con, req, app);

      connection.addToClient({ boardId, userId });

      const elements = await getBoardElements(boardId);
      connection.send(JSON.stringify(elements));

      connection.on("message", async (rawMessage) => {
        try {
          const message = WsMessageZodSchema.parse(
            JSON.parse(rawMessage.toString())
          );
          await updateBoardElement(message, boardId, userId);
          connection.broadcast(JSON.stringify(message), { boardId, userId });
        } catch (error) {
          connection.send("Could not process message");
        }
      });
    },
  };
};

export { buildRoomController };
