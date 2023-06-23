import { IBoard } from "@/domain";

type RegisterBoardProps = Pick<IBoard, "name" | "type"> & { userId: string };

type RegisterBoardFunction = (data: RegisterBoardProps) => Promise<IBoard>;

export { RegisterBoardFunction, RegisterBoardProps };
