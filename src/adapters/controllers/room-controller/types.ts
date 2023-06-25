interface IRoomController {
  execute(...args: any[]): Promise<void>;
}

type WsMessage = {
  id: string;
  data: string;
  operation: "create" | "update" | "delete";
  save: boolean;
};

export { IRoomController, WsMessage };
