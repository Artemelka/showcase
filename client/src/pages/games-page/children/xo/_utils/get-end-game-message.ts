import { INITIAL_SYMBOLS } from '../constant';
import { checkWinner } from './check-winner';
import { getEmptyCells } from './get-empty-cells';

export function getEndGameMessage(state: Array<string>, symbols: typeof INITIAL_SYMBOLS): string {
  if (checkWinner(state, symbols.user)) {
    return 'You win!';
  }

  if (checkWinner(state, symbols.ai)) {
    return 'AI wins!'
  }

  const emptyCells = getEmptyCells(state);

  if (!emptyCells.length) {
    return 'No winners!';
  }

  return '';
}