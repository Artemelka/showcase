import { COLUMNS, ROWS, DIAGONALS } from '../constant';
import { Symbols } from '../types';
import { getEmptyCells } from './get-empty-cells';

function getIndexFromRow(
  state: Array<string>,
  row: Array<number>,
  targetSymbol: string,
): { count: number; index: number } {
  return row.reduce(
    (acc, item) => {
      if (state[item] === targetSymbol) {
        acc.count++;
      }

      if (!state[item]) {
        acc.index = item;
      }

      return acc;
    },
    { count: 0, index: NaN },
  );
}

function getIndexFromRowCollection(
  collection: Array<Array<number>>,
  state: Array<string>,
  targetSymbol: string,
): Array<number> {
  return collection.reduce((acc: Array<number>, column) => {
    const { count, index } = getIndexFromRow(state, column, targetSymbol);

    if (count === 2 && !Number.isNaN(index)) {
      return [index];
    }

    return acc;
  }, []);
}

function getIndex(state: Array<string>, targetSymbol: string): Array<number> {
  const columnResult = getIndexFromRowCollection(COLUMNS, state, targetSymbol);
  const rowsResult = getIndexFromRowCollection(ROWS, state, targetSymbol);
  const diagResult = getIndexFromRowCollection(DIAGONALS, state, targetSymbol);

  return [...diagResult, ...rowsResult, ...columnResult];
}

export function easyBot(state: Array<string>, symbols: Symbols): number {
  const aiResult = getIndex(state, symbols.ai);

  if (aiResult.length) {
    return aiResult[0];
  }

  const userResult = getIndex(state, symbols.user);

  if (userResult.length) {
    return userResult[0];
  }

  const emptyCells = getEmptyCells(state);
  const randomResult = Math.floor(Math.random() * emptyCells.length);

  return emptyCells[randomResult];
}
