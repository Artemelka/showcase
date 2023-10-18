import { CardParams } from '@/pages/games-page/types';

const MAX_RANK = 15;

export function findMinRankCard(cards: Array<CardParams>): CardParams {
  return cards.reduce((acc, card) => {
    if ((acc.rank || MAX_RANK) > card.rank) {
      return card;
    }

    return acc;
  }, cards[0]);
}
