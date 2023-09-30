export function getIsUserStep(): boolean {
  const num = Math.random() * 100 % 2;

  return Boolean(Math.floor(num));
}