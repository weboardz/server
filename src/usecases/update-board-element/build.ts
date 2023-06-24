import { IElementRepository } from "@/adapters/repositories";
import { createElement } from "@/domain";

import { UpdateBoardElementFunction } from "./types";

const buildUpdateBoardElement = (
  elementRepository: IElementRepository
): UpdateBoardElementFunction => {
  return (message, boardId) => {
    if (!message.save) return;

    const element = createElement({ boardId, ...message });

    switch (message.operation) {
      case "create":
        elementRepository.create(element);
        break;
      case "delete":
        elementRepository.deleteById(element.id);
        break;
      case "update":
        elementRepository.updateById(element.id, { data: element.data });
        break;
    }
  };
};

export { buildUpdateBoardElement };
