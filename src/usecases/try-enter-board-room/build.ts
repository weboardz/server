import { IBoardRepository } from "@/adapters/repositories";
import { invalidCredentialsError, notFoundError } from "@/errors";

import { TryEnterBoardRoomFunction } from "./types";

const buildTryEnterBoardRoom = (
  boardRepository: IBoardRepository
): TryEnterBoardRoomFunction => {
  return async (boardId, doAuthenticationAndReturnUserId) => {
    const board = await boardRepository.findById(boardId);
    if (!board) throw notFoundError("board");

    switch (board.type) {
      case "private":
        const userId = await doAuthenticationAndReturnUserId();
        if (userId !== board.creatorId)
          throw invalidCredentialsError("user id");
        break;

      case "team":
      case "public":
        await doAuthenticationAndReturnUserId().catch(() => {});
        break;
    }
  };
};

export { buildTryEnterBoardRoom };
