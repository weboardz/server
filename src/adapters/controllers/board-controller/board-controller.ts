import httpStatus from "http-status";

import { ControllerAdapter, IHttpProtocol } from "../types";
import { CreateBoardBody, IBoardController } from "./types";

import { registerBoard } from "@/usecases";

const executeCreateBoard = async ({
  request,
  response,
}: IHttpProtocol<CreateBoardBody>) => {
  const { data, userId } = request;
  if (!userId) return response.send({ status: httpStatus.UNAUTHORIZED });
  await registerBoard({ ...data, userId });
  response.send({ status: httpStatus.CREATED });
};

const buildBoardController = (adapter: ControllerAdapter): IBoardController => {
  const createBoard: IBoardController["createBoard"] = async (req, res) => {
    await executeCreateBoard(adapter<CreateBoardBody>(req, res));
  };

  return Object.freeze({
    createBoard,
  });
};

export { buildBoardController };
