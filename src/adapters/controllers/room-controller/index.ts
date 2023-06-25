import { fastifyAdapter } from "../fastify-adapter";
import { buildRoomController } from "./build";

const roomController = buildRoomController(fastifyAdapter().ws);

export { roomController };
