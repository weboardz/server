type TryEnterBoardRoomFunction = (
  boardId: string,
  doAuthenticationAndReturnUserId: () => Promise<string>
) => Promise<void>;

export { TryEnterBoardRoomFunction };
