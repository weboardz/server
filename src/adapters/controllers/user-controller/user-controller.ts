import { registerUser } from "@/usecases";
import httpStatus from "http-status";
import { ControllerAdapter, IHttpProtocol } from "../types";
import { IUserController, SignUpBody } from "./types";

const executeSignUpUser = async ({
  request,
  response,
}: IHttpProtocol<SignUpBody>) => {
  const data = request.body;
  try {
    await registerUser(data);
    response.send({ status: httpStatus.CREATED });
  } catch (error) {
    response.send({ status: httpStatus.BAD_REQUEST, payload: error });
  }
};

const buildUserController = (adapter: ControllerAdapter): IUserController => {
  const signUpUser: IUserController["signUpUser"] = async (
    request,
    response
  ) => {
    await executeSignUpUser(adapter<SignUpBody>(request, response));
  };

  return Object.freeze({
    signUpUser,
  });
};

export { buildUserController };
