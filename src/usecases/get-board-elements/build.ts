import { IElementRepository } from "@/adapters/repositories";
import { GetBoardElementsFunction } from "./types";

const buildGetBoardElements = (
  elementRepository: IElementRepository
): GetBoardElementsFunction => {
  return async (boardId) => {
    return elementRepository.findManyByBoardId(boardId);
  };
};

export { buildGetBoardElements };
