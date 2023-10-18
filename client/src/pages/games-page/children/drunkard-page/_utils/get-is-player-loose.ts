import { CardParams } from '@/pages/games-page/types';

type Params = {
  enemyField: Array<CardParams>;
  playerField: Array<CardParams>;
};

export function getIsPlayerLoose({ enemyField, playerField }: Params): boolean {
  const enemyCard = enemyField[enemyField.length - 1];
  const playerCard = playerField[playerField.length - 1];

  if (enemyCard.rank === 6 && playerCard.rank === 14) {
    return true;
  }

  if (enemyCard.rank === 14 && playerCard.rank === 6) {
    return false;
  }

  if (enemyCard.rank > playerCard.rank) {
    return true;
  }

  // default enemyCard.rank < playerCard.rank
  return false;
}
