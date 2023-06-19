import { BuildCreateEntityProps } from "../types";
import { CreateBoardFunction } from "./types";

const buildCreateBoard = ({
  idGenerator,
}: BuildCreateEntityProps): CreateBoardFunction => {
  return ({
    id,
    name,
    elements,
    creatorId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) => {
    if (!id) id = idGenerator();

    return Object.freeze({
      id,
      name,
      elements,
      creatorId,
      createdAt,
      updatedAt,
    });
  };
};

export { buildCreateBoard };
