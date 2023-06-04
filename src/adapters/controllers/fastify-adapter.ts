import { FastifyReply, FastifyRequest } from "fastify";
import { ControllerAdapter, IHttpProtocol, Validator } from "./types";

const fastifyAdapter: ControllerAdapter = <B>(
  config: { bodyValidator: Validator<B> },
  fastifyRequest: FastifyRequest,
  fastifyReply: FastifyReply
) => {
  const { body, params, query } = fastifyRequest;

  const parsedBody = config.bodyValidator(body);

  const adaptedHttpProtocol: IHttpProtocol<B> = {
    request: {
      body: parsedBody,
      params: params || {},
      query: query || {},
    },
    response: {
      send: ({ status, payload }) => {
        fastifyReply.code(status).send(payload);
      },
    },
  };

  return adaptedHttpProtocol;
};

export { fastifyAdapter };
