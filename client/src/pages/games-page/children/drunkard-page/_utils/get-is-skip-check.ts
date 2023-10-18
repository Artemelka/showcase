import { CardParams } from '@/pages/games-page/types';

type Params = {
  enemyField: Array<CardParams>;
  playerField: Array<CardParams>;
};

export function getIsSkipCheck({ enemyField, playerField }: Params): boolean {
  const isReadyToCheck =
    enemyField.length &&
    playerField.length &&
    enemyField.length === playerField.length;

  if (isReadyToCheck) {
    const enemyCard = enemyField[enemyField.length - 1];
    const playerCard = playerField[playerField.length - 1];

    return enemyCard.rank === playerCard.rank;
  }

  return true;
}
