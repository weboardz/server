import { IBoardRepository } from "@/adapters/repositories";
import { invalidCredentialsError, notFoundError } from "@/errors";

import { UpdateBoardFunction } from "./types";

const buildUpdateBoard = (
  boardRepository: IBoardRepository
): UpdateBoardFunction => {
  return async (id, userId, data) => {
    const boardToUpdate = await boardRepository.findById(id);
    if (!boardToUpdate) throw notFoundError("board");

    if (boardToUpdate.creatorId !== userId)
      throw invalidCredentialsError("user id");

    await boardRepository.updateById(id, data);
  };
};

export { buildUpdateBoard };
