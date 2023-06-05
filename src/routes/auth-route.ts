import { userController } from "@/adapters/controllers";
import { FastifyInstance } from "fastify";

const authRoute = async (app: FastifyInstance) => {
  app.post("/signup", userController.signUpUser);
  app.post("/signin", userController.signInUser);
};

export { authRoute };
