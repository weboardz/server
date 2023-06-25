import httpStatus from "http-status";

import { logUser, registerUser } from "@/usecases";

import { HttpControllerAdapter } from "../types";
import { IUserController, SignInBody, SignUpBody } from "./types";

const buildUserController = (
  adapter: HttpControllerAdapter
): IUserController => {
  return {
    signUpUser: async (req, res) => {
      const {
        request: { data },
        response,
      } = adapter<SignUpBody>(req, res);

      const user = await registerUser(data);
      response.send({ status: httpStatus.CREATED, payload: user });
    },

    signInUser: async (req, res) => {
      const {
        request: { data },
        response,
      } = adapter<SignInBody>(req, res);

      const credentials = await logUser(data);
      response.send({ status: httpStatus.OK, payload: credentials });
    },
  };
};

export { buildUserController };
