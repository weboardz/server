import { IBoardRepository, IElementRepository } from "@/adapters/repositories";
import { createElement } from "@/domain";
import { invalidCredentialsError } from "@/errors";

import { UpdateBoardElementFunction } from "./types";

const buildUpdateBoardElement = (
  boardRepository: IBoardRepository,
  elementRepository: IElementRepository
): UpdateBoardElementFunction => {
  return async (message, boardId, userId) => {
    if (!message.save) return;

    const board = await boardRepository.findById(boardId);
    if (board?.creatorId !== userId) throw invalidCredentialsError("user id");

    const element = createElement({ boardId, ...message });
    const elementExists = await elementRepository.findById(element.id);

    switch (message.operation) {
      case "create":
        if (!elementExists) await elementRepository.create(element);
        break;

      case "delete":
        if (elementExists) await elementRepository.deleteById(element.id);
        break;

      case "update":
        if (elementExists)
          await elementRepository.updateById(element.id, {
            data: element.data,
          });
        break;
    }
  };
};

export { buildUpdateBoardElement };
