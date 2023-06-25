interface IBoardController {
  createBoard(...args: any[]): Promise<void>;
  deleteBoard(...args: any[]): Promise<void>;
  updateBoard(...args: any[]): Promise<void>;
}

type BoardIdParam = {
  boardId: string;
};

type CreateBoardBody = {
  name: string;
  type: "public" | "private" | "team";
};

type UpdateBoardBody = Partial<CreateBoardBody>;

export { BoardIdParam, CreateBoardBody, IBoardController, UpdateBoardBody };
