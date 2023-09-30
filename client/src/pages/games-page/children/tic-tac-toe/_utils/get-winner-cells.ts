import {
  COLUMNS,
  DIAGONALS,
  ROWS
} from '../constant';
import { getWinnerRows } from './get-winner-rows';

export function getWinnerCells(state: Array<string>, symbol: string): Array<number> {
  if (!Boolean(symbol)) {
    return [];
  }

  const columnCells = getWinnerRows({ rows: COLUMNS, state, symbol });

  if (columnCells.length) {
    return columnCells[0];
  }

  const rowCells = getWinnerRows({ rows: ROWS, state, symbol });

  if (rowCells.length) {
    return rowCells[0];
  }

  const diagonalCells = getWinnerRows({ rows: DIAGONALS, state, symbol });

  if (diagonalCells.length) {
    return diagonalCells[0];
  }

  return [];
}