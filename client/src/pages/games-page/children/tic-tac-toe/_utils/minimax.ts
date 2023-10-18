import type { Move, Symbols } from '../types';
import { checkWinner } from './check-winner';
import { getEmptyCells } from './get-empty-cells';
import { getBestMove } from './get-best-move';
import { getUpdatedState } from './get-updated-state';

type GetPossibleMovesParams = {
  emptyCells: Array<number>;
  state: Array<string>;
  symbols: Symbols;
  targetSymbol: string;
};

function getPossibleMoves({
  emptyCells,
  state,
  symbols,
  targetSymbol,
}: GetPossibleMovesParams): Array<Move> {
  return emptyCells.reduce((res: Array<Move>, cellIndex) => {
    const nextSymbol =
      targetSymbol === symbols.user ? symbols.ai : symbols.user;
    const nextState = getUpdatedState(state, {
      cellIndex,
      symbol: targetSymbol,
    });
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

type Params = {
  state: Array<string>;
  symbols: Symbols;
  targetSymbol: string;
};

export function minimax({ state, symbols, targetSymbol }: Params): Move {
  if (checkWinner(state, symbols.user)) {
    return { cellIndex: NaN, score: -10 };
  }

  if (checkWinner(state, symbols.ai)) {
    return { cellIndex: NaN, score: 10 };
  }

  const emptyCells = getEmptyCells(state);

  if (!emptyCells.length) {
    return { cellIndex: NaN, score: 0 };
  }

  const moves = getPossibleMoves({ emptyCells, state, symbols, targetSymbol });

  return getBestMove({ moves, symbols, targetSymbol });
}
