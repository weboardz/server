import { registerBoard } from "@/usecases/register-board";
import httpStatus from "http-status";
import { ControllerAdapter, IHttpProtocol } from "../types";
import { CreateBoardSchema } from "./schemas";
import { CreateBoardBody, IBoardController } from "./types";

const executeCreateBoard = async ({
  request,
  response,
}: IHttpProtocol<CreateBoardBody>) => {
  const data = request.body;
  await registerBoard(data);
  response.send({ status: httpStatus.CREATED });
};

const buildBoardController = (adapter: ControllerAdapter): IBoardController => {
  const createBoard: IBoardController["createBoard"] = async (
    request,
    response
  ) => {
    await executeCreateBoard(
      adapter<CreateBoardBody>(
        { bodyValidator: (data: any) => CreateBoardSchema.parse(data) },
        request,
        response
      )
    );
  };

  return Object.freeze({
    createBoard,
  });
};

export { buildBoardController };
