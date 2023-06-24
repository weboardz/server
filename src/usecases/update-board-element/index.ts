import { elementPrismaRepository } from "@/adapters/repositories";
import { buildUpdateBoardElement } from "./build";

const updateBoardElement = buildUpdateBoardElement(elementPrismaRepository);

export { updateBoardElement };
