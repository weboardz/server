import { IBoard, IUser } from "@/domain";

interface IUserRepository {
  create: (data: IUser) => Promise<IUser>;
  findById: (id: string) => Promise<IUser | null>;
  findByEmail: (email: string) => Promise<IUser | null>;
}

interface IBoardRepository {
  create: (data: IBoard) => Promise<IBoard>;
}

export { IBoardRepository, IUserRepository };
