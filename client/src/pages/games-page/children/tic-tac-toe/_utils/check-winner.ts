import {
  COLUMNS,
  DIAGONALS,
  ROWS
} from '../constant';
import { getWinnerRows } from './get-winner-rows';

export function checkWinner(state: Array<string>, symbol: string): boolean {
  const inColumn = getWinnerRows({ state, rows: COLUMNS, symbol });
  const inRow = getWinnerRows({ state, rows: ROWS, symbol });
  const inDiagonal = getWinnerRows({ state, rows: DIAGONALS, symbol });

  return Boolean(inRow.length || inColumn.length || inDiagonal.length);
}