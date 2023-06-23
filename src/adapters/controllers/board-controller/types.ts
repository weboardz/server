interface IBoardController {
  createBoard(...args: any[]): Promise<void>;
}

type CreateBoardBody = {
  name: string;
  type: "public" | "private";
};

export { CreateBoardBody, IBoardController };
