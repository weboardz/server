interface IEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

type BuildCreateEntityProps = {
  idGenerator: () => string;
};

export { IEntity, BuildCreateEntityProps };
