import { IElement } from "@/domain";

type GetBoardElementsFunction = (boardId: string) => Promise<IElement[]>;

export { GetBoardElementsFunction };
