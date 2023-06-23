import { IBoard, IUser } from "@/domain";

interface IUserRepository {
  create(data: IUser): Promise<IUser>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
}

interface IBoardRepository {
  create(data: IBoard): Promise<IBoard>;
  findById(id: string): Promise<IBoard | null>;
  findManyByUserId(userId: string): Promise<IBoard[]>;
  updateElementsFromId(id: string, elements: string): Promise<void>;
}

export { IBoardRepository, IUserRepository };
