interface IHttpProtocol<T> {
  request: Request<T>;
  response: Response;
}

type Request<T> = {
  data: T;
  userId?: string;
};

type Response = {
  send(config: { status: number; payload?: any }): void;
};

type ControllerAdapter = <T>(...args: any[]) => IHttpProtocol<T>;

export { ControllerAdapter, IHttpProtocol, Request, Response };
