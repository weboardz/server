import { IElementRepository } from "@/adapters/repositories";
import { createElement } from "@/domain";

import { UpdateBoardElementFunction } from "./types";

const buildUpdateBoardElement = (
  elementRepository: IElementRepository
): UpdateBoardElementFunction => {
  return async (message, boardId) => {
    if (!message.save) return;

    const element = createElement({ boardId, ...message });
    const elementExists = await elementRepository.findById(element.id);

    switch (message.operation) {
      case "create":
        await elementRepository.create(element);
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
