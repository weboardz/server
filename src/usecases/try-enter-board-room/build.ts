import { IBoardRepository } from "@/adapters/repositories";
import { invalidCredentialsError, notFoundError } from "@/errors";

import { TryEnterBoardRoomFunction } from "./types";

const buildTryEnterBoardRoom = (
  boardRepository: IBoardRepository
): TryEnterBoardRoomFunction => {
  return async (boardId, doAuthenticationAndReturnUserId) => {
    const board = await boardRepository.findById(boardId);
    if (!board) throw notFoundError("board");

    if (board.type === "private") {
      const userId = await doAuthenticationAndReturnUserId();
      if (userId !== board.creatorId) throw invalidCredentialsError("user id");
    }
  };
};

export { buildTryEnterBoardRoom };
