interface IHttpProtocol<RequestBodyType> {
  request: Request<RequestBodyType>;
  response: Response;
}

type Request<BodyType> = {
  userId?: string;
  params: object;
  query: object;
  body: BodyType;
};

type Response = {
  send: (config: { status: number; payload?: any }) => void;
};

type ControllerAdapter = <BodyType>(
  config: {
    bodyValidator: Validator<BodyType>;
  },
  ...args: any[]
) => IHttpProtocol<BodyType>;

type Validator<T> = (data: any) => T;

export { IHttpProtocol, Request, Response, ControllerAdapter, Validator };
