import {
  boardPrismaRepository,
  elementPrismaRepository,
} from "@/adapters/repositories";

import { buildUpdateBoardElement } from "./build";

const updateBoardElement = buildUpdateBoardElement(
  boardPrismaRepository,
  elementPrismaRepository
);

export { updateBoardElement };
