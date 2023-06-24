import { IBoard, IElement, IUser } from "@/domain";

interface IRepository<T> {
  create(data: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  deleteById(id: string): Promise<boolean>;
  updateById(id: string, data: Partial<T>): Promise<T | null>;
}

interface IUserRepository extends IRepository<IUser> {
  findByEmail(email: string): Promise<IUser | null>;
}

interface IBoardRepository extends IRepository<IBoard> {
  findManyByUserId(userId: string): Promise<IBoard[]>;
}

interface IElementRepository extends IRepository<IElement> {
  findManyByBoardId(boardId: string): Promise<IElement[]>;
}

export { IBoardRepository, IElementRepository, IRepository, IUserRepository };
