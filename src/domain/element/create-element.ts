import { invalidFormatError } from "@/errors";

import { BuildCreateEntityProps } from "../types";
import { CreateElementFunction } from "./types";

const buildCreateElement = ({
  idGenerator,
}: BuildCreateEntityProps): CreateElementFunction => {
  return ({
    id,
    data,
    boardId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) => {
    id ??= idGenerator();
    if (!boardId) invalidFormatError("boardId");

    return Object.freeze({
      id,
      data,
      boardId,
      createdAt,
      updatedAt,
    });
  };
};

export { buildCreateElement };
