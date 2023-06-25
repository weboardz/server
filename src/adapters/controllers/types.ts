interface IHttpProtocol<T> {
  request: Request<T>;
  response: Response;
}

interface IWebSocketProtocol<T> {
  connection: Connection;
  request: Request<T>;
}

type CustomClientProps = { boardId: string; userId?: string };

type ExtendedWebSocket = WebSocket & CustomClientProps;

type WsEvent = "message" | "open" | "close";

type Connection = {
  on(event: WsEvent, listener: (data: WebSocket) => void): void;
  send(payload: string): void;
  addToClient(props: CustomClientProps): void;
  broadcast(payload: string, conditions: CustomClientProps): void;
};

type Request<T> = {
  data: T;
  userId?: string;
};

type Response = {
  send(config: { status: number; payload?: any }): void;
};

type HttpControllerAdapter = <T = null>(...args: any[]) => IHttpProtocol<T>;

type WebSocketControllerAdapter = <T = null>(
  ...args: any[]
) => IWebSocketProtocol<T>;

export {
  ExtendedWebSocket,
  HttpControllerAdapter,
  IHttpProtocol,
  IWebSocketProtocol,
  WebSocketControllerAdapter
};
