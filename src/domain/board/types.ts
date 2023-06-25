import { IEntity } from "../types";

interface IBoard extends IEntity {
  name: string;
  type: "private" | "public" | "team";
  creatorId: string;
}

type CreateBoardProps = Omit<IBoard, keyof IEntity> & Partial<IEntity>;

type CreateBoardFunction = (data: CreateBoardProps) => IBoard;

export { CreateBoardFunction, CreateBoardProps, IBoard };
