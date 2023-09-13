import { isError } from "../errors/assertion";

/**
 * Stringifies an error, including its name and message where available.
 *
 * @param error - The error.
 * @public
 */
export function stringifyError(error: unknown): string {
  if (isError(error)) {
    // Prefer error.toString, but if it's not implemented we use a nicer fallback
    const str = String(error);
    return str !== "[object Object]" ? str : `${error.name}: ${error.message}`;
  }

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `unknown error '${error}'`;
}
