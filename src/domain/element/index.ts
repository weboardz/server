import crypto from "crypto";

import { buildCreateElement } from "./create-element";

const createElement = buildCreateElement({
  idGenerator: () => crypto.randomUUID(),
});

export { createElement };
