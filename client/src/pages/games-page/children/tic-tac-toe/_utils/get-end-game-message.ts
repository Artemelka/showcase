import { Symbols } from '../types';
import { checkWinner } from './check-winner';
import { getEmptyCells } from './get-empty-cells';

export function getEndGameMessage(
  state: Array<string>,
  symbols: Symbols,
): string {
  if (checkWinner(state, symbols.user)) {
    return 'You win!';
  }

  if (checkWinner(state, symbols.ai)) {
    return 'AI wins!';
  }

  const emptyCells = getEmptyCells(state);

  if (!emptyCells.length) {
    return 'No winners!';
  }

  return '';
}
