import {
  COLUMNS,
  DIAGONALS,
  ROWS
} from '../constant';
import { checkRows } from './check-rows';

export function checkWinner(state: Array<string>, symbol: string): boolean {
  const inColumn = checkRows(state, COLUMNS, symbol);
  const inRow = checkRows(state, ROWS, symbol);
  const inDiagonal = checkRows(state, DIAGONALS, symbol);;

  return inRow || inColumn || inDiagonal;
}