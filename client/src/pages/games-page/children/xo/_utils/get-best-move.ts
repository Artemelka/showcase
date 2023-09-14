import { Move, Symbols } from '../types';

type GetBestMoveParams = {
  moves: Array<Move>,
  symbols: Symbols,
  targetSymbol: string,
};

export function getBestMove({ moves, symbols, targetSymbol }: GetBestMoveParams): Move {
  if (targetSymbol === symbols.user) {
    const { move } = moves.reduce((res, move) => {
      if (move.score < res.bestScore) {
        return {
          move,
          bestScore: move.score,
        };
      }

      return res;
    }, { move: { cellIndex: NaN, score: NaN }, bestScore: +Infinity });

    return move;
  }

  if (targetSymbol === symbols.ai) {
    const { move } = moves.reduce((res, move) => {
      if (move.score > res.bestScore) {
        return {
          move,
          bestScore: move.score,
        };
      }

      return res;
    }, { move: { cellIndex: NaN, score: NaN }, bestScore: -Infinity });

    return move
  }

  return { cellIndex: NaN, score: 0 };
}