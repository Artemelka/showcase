const MIN_LENGTH = 6;

export function checkLength(value: string): boolean {
  return value.length >= MIN_LENGTH;
}