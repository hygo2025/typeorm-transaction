import { IsolationLevel } from "../enum/isolation-level.enum";
import { Propagation } from "../enum/propagation.enum";

export type Options = {
  readonly propagation?: Propagation
  readonly isolationLevel?: IsolationLevel
};