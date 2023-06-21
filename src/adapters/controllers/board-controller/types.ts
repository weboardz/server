interface IBoardController {
  createBoard: (...args: any[]) => Promise<void>;
}

type CreateBoardBody = {
  name: string;
  userId: string;
};

export { CreateBoardBody, IBoardController };
