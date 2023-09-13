import { stringifyError } from "../serialization/error";
import { ErrorLike, isError } from "./assertion";

/**
 * A base class that custom Error classes can inherit from.
 *
 * @public
 * @example
 *```ts
 * class MyCustomError extends CustomErrorBase {}
 *
 * const e = new MyCustomError('Some message', cause);
 * // e.name === 'MyCustomError'
 * // e.message === 'Some message'
 * // e.cause === cause
 * // e.stack is set if the runtime supports it
 * ```
 */
export class CustomErrorBase extends Error {
  /**
   * An inner error that caused this error to be thrown, if any.
   */
  readonly cause?: Error | undefined;

  constructor(message?: string, cause?: ErrorLike) {
    let fullMessage = message;
    if (cause !== undefined) {
      const causeStr = stringifyError(cause);
      if (fullMessage) {
        fullMessage += `; caused by ${causeStr}`;
      } else {
        fullMessage = `caused by ${causeStr}`;
      }
    }

    super(fullMessage);

    Error.captureStackTrace?.(this, this.constructor);

    this.name = this.constructor.name;
    this.cause = isError(cause) ? cause : undefined;
  }
}
