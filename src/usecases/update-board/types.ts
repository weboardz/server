type UpdateBoardFunction = (
  id: string,
  userId: string,
  data: { name?: string; type?: "private" | "public" | "team" }
) => Promise<void>;

export { UpdateBoardFunction };
