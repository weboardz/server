import { fastifyAdapter } from "../fastify-adapter";
import { buildBoardController } from "./board-controller";

const boardController = buildBoardController(fastifyAdapter);

export { boardController };
