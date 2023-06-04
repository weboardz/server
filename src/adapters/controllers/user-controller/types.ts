interface IUserController {
  signUpUser: (...args: any[]) => Promise<void>;
}

type SignUpBody = {
  name: string;
  email: string;
  password: string;
};

export { IUserController, SignUpBody };
