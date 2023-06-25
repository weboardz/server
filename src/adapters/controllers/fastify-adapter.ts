import { SocketStream } from "@fastify/websocket";
import { FastifyReply, FastifyRequest } from "fastify";

import { HttpControllerAdapter, WebSocketControllerAdapter } from "./types";

const fastifyAdapter = () => {
  const http: HttpControllerAdapter = <T>(
    req: FastifyRequest,
    res: FastifyReply
  ) => {
    return {
      request: {
        data: { ...(req.body as object), ...(req.params as object) } as T,
        userId: req.user?.sub,
      },
      response: {
        send: ({ status, payload }) => res.status(status).send(payload),
      },
    };
  };

  const ws: WebSocketControllerAdapter = <T>(
    con: SocketStream,
    req: FastifyRequest
  ) => {
    return {
      connection: {
        on: (event, listener) => con.socket.on(event, listener),
        send: (payload) => con.socket.send(payload),
      },
      request: {
        data: { ...(req.body as object), ...(req.params as object) } as T,
        userId: req.user?.sub,
      },
    };
  };

  return { http, ws };
};

export { fastifyAdapter };
