import { Move, Symbols } from '../types';
import { checkWinner } from './check-winner';
import { getEmptyCells } from './get-empty-cells';
import { getPossibleMoves } from './get-possible-moves';
import { getBestMove } from './get-best-move';

export function minimax(state: Array<string>, symbols: Symbols, targetSymbol: string): Move {
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