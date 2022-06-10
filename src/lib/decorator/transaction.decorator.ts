import { Options } from "../types"

/**
 * Used to declare a Transaction operation. In order to use it, you must use {@link BaseRepository} custom repository in order to use the Transactional decorator
 * @param propagation - The transaction propagation type. see {@link Propagation}
 * @param isolationLevel - The transaction isolation level. see {@link IsolationLevel}
 */
export function Transactional(options?: Options): MethodDecorator {
  return (_target: unknown, _methodName: string | symbol, descriptor: TypedPropertyDescriptor<unknown>) => {
    const originalMethod = descriptor.value
    debugger
    console.info(originalMethod);
    console.info(options);

  }
}