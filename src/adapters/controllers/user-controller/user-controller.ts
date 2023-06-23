import httpStatus from "http-status";

import { ControllerAdapter, IHttpProtocol } from "../types";
import { IUserController, SignInBody, SignUpBody } from "./types";

import { logUser, registerUser } from "@/usecases";

const executeSignUpUser = async ({
  request,
  response,
}: IHttpProtocol<SignUpBody>) => {
  await registerUser(request.data);
  response.send({ status: httpStatus.CREATED });
};

const executeSignInUser = async ({
  request,
  response,
}: IHttpProtocol<SignInBody>) => {
  const credentials = await logUser(request.data);
  response.send({ status: httpStatus.OK, payload: credentials });
};

const buildUserController = (adapter: ControllerAdapter): IUserController => {
  const signUpUser: IUserController["signUpUser"] = async (req, res) => {
    await executeSignUpUser(adapter<SignUpBody>(req, res));
  };

  const signInUser: IUserController["signInUser"] = async (req, res) => {
    await executeSignInUser(adapter<SignInBody>(req, res));
  };

  return Object.freeze({
    signUpUser,
    signInUser,
  });
};

export { buildUserController };
