import { IEntity } from "../types";

interface IElement extends IEntity {
  data: string;
  boardId: string;
}

type CreateElementProps = Omit<IElement, keyof IEntity> & Partial<IEntity>;

type CreateElementFunction = (data: CreateElementProps) => IElement;

export { CreateElementFunction, CreateElementProps, IElement };
