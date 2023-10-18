import { CardParams } from '@/pages/games-page/types';

type Cards = Array<CardParams>;
type Params = {
  playerBank: Cards;
  enemyBank: Cards;
};
type ReturnValue = 'enemy' | 'player' | '';

export function getWinner({ enemyBank, playerBank }: Params): ReturnValue {
  if (!playerBank.length) {
    return 'player';
  }

  if (!enemyBank.length) {
    return 'enemy';
  }

  return '';
}
