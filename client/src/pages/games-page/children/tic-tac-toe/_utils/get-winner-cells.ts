import {
  COLUMNS,
  DIAGONALS,
  ROWS
} from '../constant';

export function getWinnerCells(state: Array<string>, symbol: string): Array<number> {
  if (!Boolean(symbol)) {
    return [];
  }

  const columnCells = COLUMNS.filter(row => row.every(index => Boolean(state[index]) && state[index] === symbol));

  if (columnCells.length) {
    return columnCells[0];
  }

  const rowCells = ROWS.filter(row => row.every(index => Boolean(state[index]) && state[index] === symbol));

  if (rowCells.length) {
    return rowCells[0];
  }

  const diagonalCells = DIAGONALS.filter(row => row.every(index => Boolean(state[index]) && state[index] === symbol));

  if (diagonalCells.length) {
    return diagonalCells[0];
  }

  return [];
}