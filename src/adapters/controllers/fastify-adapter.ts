import { FastifyReply, FastifyRequest } from "fastify";
import { ControllerAdapter, IHttpProtocol } from "./types";

const fastifyAdapter: ControllerAdapter = <T>(
  fastifyRequest: FastifyRequest,
  fastifyReply: FastifyReply
) => {
  const { body, params, query } = fastifyRequest;

  const adaptedHttpProtocol: IHttpProtocol<T> = {
    request: {
      body: body as T,
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
