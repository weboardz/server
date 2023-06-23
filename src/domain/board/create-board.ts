import { invalidFormatError } from "@/errors";

import { BuildCreateEntityProps } from "../types";
import { CreateBoardFunction } from "./types";

const buildCreateBoard = ({
  idGenerator,
}: BuildCreateEntityProps): CreateBoardFunction => {
  return ({
    id,
    name,
    type,
    creatorId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) => {
    id ??= idGenerator();

    if (!name) invalidFormatError("name");
    if (!creatorId) invalidFormatError("creatorId");

    const typeIsValid = ["private", "public", "team"].includes(type);
    if (!typeIsValid) invalidFormatError("type");

    return Object.freeze({
      id,
      name,
      type,
      creatorId,
      createdAt,
      updatedAt,
    });
  };
};

export { buildCreateBoard };
