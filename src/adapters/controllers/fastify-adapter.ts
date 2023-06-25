import { SocketStream } from "@fastify/websocket";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import {
  ExtendedWebSocket,
  HttpControllerAdapter,
  WebSocketControllerAdapter,
} from "./types";

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
    req: FastifyRequest,
    app: FastifyInstance
  ) => {
    return {
      connection: {
        on: (event, listener) => con.socket.on(event, listener),
        send: (payload) => con.socket.send(payload),
        addToClient: ({ boardId, userId }) => {
          const socket = con.socket as unknown as ExtendedWebSocket;
          socket.boardId = boardId;
          socket.userId = userId;
        },
        broadcast: (payload, { boardId, userId }) => {
          app.websocketServer.clients.forEach((wsClient) => {
            const client = wsClient as unknown as ExtendedWebSocket;
            if (
              client.boardId === boardId &&
              client.userId !== userId &&
              client.readyState === 1
            )
              client.send(payload);
          });
        },
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
