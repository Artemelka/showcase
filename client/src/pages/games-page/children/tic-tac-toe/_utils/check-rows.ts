export function checkRows(state: Array<string>, rows: Array<Array<number>>, symbol: string): boolean {
  return rows.some(row => row.every(index => Boolean(state[index]) && state[index] === symbol))
}