import httpStatus from "http-status";

import {
  deleteBoard,
  getUserBoards,
  registerBoard,
  updateBoard,
} from "@/usecases";

import { HttpControllerAdapter } from "../types";
import {
  BoardIdParam,
  CreateBoardBody,
  IBoardController,
  UpdateBoardBody,
} from "./types";

const buildBoardController = (
  adapter: HttpControllerAdapter
): IBoardController => {
  return {
    createBoard: async (req, res) => {
      const {
        request: { data, userId },
        response,
      } = adapter<CreateBoardBody>(req, res);

      if (!userId) return response.send({ status: httpStatus.UNAUTHORIZED });

      const board = await registerBoard({ ...data, userId });
      response.send({ status: httpStatus.CREATED, payload: board });
    },

    deleteBoard: async (req, res) => {
      const {
        request: { data, userId },
        response,
      } = adapter<BoardIdParam>(req, res);

      if (!userId) return response.send({ status: httpStatus.UNAUTHORIZED });

      await deleteBoard(data.boardId, userId);
      response.send({ status: httpStatus.OK });
    },

    updateBoard: async (req, res) => {
      const {
        request: { data, userId },
        response,
      } = adapter<UpdateBoardBody & BoardIdParam>(req, res);

      if (!userId) return response.send({ status: httpStatus.UNAUTHORIZED });

      const { name, type, boardId } = data;
      await updateBoard(boardId, userId, { name, type });

      response.send({ status: httpStatus.OK });
    },

    getBoards: async (req, res) => {
      const {
        request: { userId },
        response,
      } = adapter(req, res);

      if (!userId) return response.send({ status: httpStatus.UNAUTHORIZED });

      const boards = await getUserBoards(userId);
      response.send({ status: httpStatus.OK, payload: boards });
    },
  };
};

export { buildBoardController };
