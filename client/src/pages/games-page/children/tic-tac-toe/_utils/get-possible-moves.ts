import { Move, Symbols } from '../types';
import { getUpdatedState } from './get-updated-state';
import { minimax } from './minimax';

type GetPossibleMovesParams = {
  emptyCells: Array<number>,
  state: Array<string>,
  symbols: Symbols,
  targetSymbol: string,
};

export function getPossibleMoves({ emptyCells, state, symbols, targetSymbol }: GetPossibleMovesParams): Array<Move> {
  return emptyCells.reduce((res: Array<Move>, cellIndex) => {
    const nextSymbol = targetSymbol === symbols.user ? symbols.ai : symbols.user;
    const nextState = getUpdatedState(state, { cellIndex, symbol: targetSymbol });
    const { score } = minimax({
      state: nextState,
      symbols,
      targetSymbol: nextSymbol,
    });

    res.push({
      cellIndex,
      score,
    });

    return res;
  }, []);
}