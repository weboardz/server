import { IEntity } from "../types";

interface IBoard extends IEntity {
  name: string;
  type: "private" | "public" | "team";
  elements: string;
  creatorId: string;
}

type CreateBoardProps = IBoard & Partial<IEntity>;

type CreateBoardFunction = (data: CreateBoardProps) => IBoard;

export { CreateBoardFunction, CreateBoardProps, IBoard };
