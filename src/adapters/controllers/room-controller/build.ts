import { WsMessageZodSchema } from "@/schemas";
import { getBoardElements, updateBoardElement } from "@/usecases";

import { WebSocketControllerAdapter } from "../types";
import { IRoomController } from "./types";

const buildRoomController = (
  adapter: WebSocketControllerAdapter
): IRoomController => {
  return {
    execute: async (con: any, req: any) => {
      const {
        connection,
        request: {
          userId,
          data: { boardId },
        },
      } = adapter<{ boardId: string }>(con, req);

      const elements = await getBoardElements(boardId);
      connection.send(JSON.stringify(elements));

      connection.on("message", async (rawMessage) => {
        try {
          const message = WsMessageZodSchema.parse(
            JSON.parse(rawMessage.toString())
          );

          if (message.save) await updateBoardElement(message, boardId);
        } catch (error) {
          connection.send("Invalid Message Type");
        }
      });
    },
  };
};

export { buildRoomController };
