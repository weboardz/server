import { elementPrismaRepository } from "@/adapters/repositories";
import { buildGetBoardElements } from "./build";

const getBoardElements = buildGetBoardElements(elementPrismaRepository);

export { getBoardElements };
