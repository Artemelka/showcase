export function getIsUserStep(): boolean {
  return Boolean(Math.floor(Math.random() * 100) % 2);
}