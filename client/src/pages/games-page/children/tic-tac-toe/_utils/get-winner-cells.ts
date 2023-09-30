import {
  COLUMNS,
  DIAGONALS,
  ROWS
} from '../constant';

function getWinnerRows(rows: Array<Array<number>>, state: Array<string>, symbol: string): Array<Array<number>> {
  return rows.filter(row => row.every(index => Boolean(state[index]) && state[index] === symbol))
}

export function getWinnerCells(state: Array<string>, symbol: string): Array<number> {
  if (!Boolean(symbol)) {
    return [];
  }

  const columnCells = getWinnerRows(COLUMNS, state, symbol);

  if (columnCells.length) {
    return columnCells[0];
  }

  const rowCells = getWinnerRows(ROWS, state, symbol);

  if (rowCells.length) {
    return rowCells[0];
  }

  const diagonalCells = getWinnerRows(DIAGONALS, state, symbol);

  if (diagonalCells.length) {
    return diagonalCells[0];
  }

  return [];
}