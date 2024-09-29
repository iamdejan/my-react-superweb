export function isStateChanged<T>(previous: T, current: T): boolean {
  return previous !== current;
}
