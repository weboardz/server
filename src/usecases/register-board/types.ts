import { IBoard } from "@/domain";

type RegisterBoardProps = {
  name: string;
  userId: string;
};

type RegisterBoardFunction = (data: RegisterBoardProps) => Promise<IBoard>;

export { RegisterBoardFunction, RegisterBoardProps };
