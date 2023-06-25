import { fastifyAdapter } from "../fastify-adapter";
import { buildBoardController } from "./build";

const boardController = buildBoardController(fastifyAdapter().http);

export { boardController };
