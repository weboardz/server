import { FastifyReply, FastifyRequest } from "fastify";
import { ControllerAdapter } from "./types";

const fastifyAdapter: ControllerAdapter = <T>(
  req: FastifyRequest,
  res: FastifyReply
) => {
  return {
    request: {
      data: { ...(req.body as object), ...(req.params as object) } as T,
      userId: req.user?.sub,
    },
    response: {
      send: ({ status, payload }) => {
        res.code(status).send(payload);
      },
    },
  };
};

export { fastifyAdapter };
