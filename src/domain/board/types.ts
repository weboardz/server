import { IEntity } from "../types";

interface IBoard extends IEntity {
  name: string;
  elements: string;
  creatorId: string;
}

type CreateBoardProps = Omit<
  Partial<IBoard>,
  "name" | "elements" | "creatorId"
> & {
  name: string;
  elements: string;
  creatorId: string;
};

type CreateBoardFunction = (data: CreateBoardProps) => IBoard;

export { CreateBoardFunction, CreateBoardProps, IBoard };
