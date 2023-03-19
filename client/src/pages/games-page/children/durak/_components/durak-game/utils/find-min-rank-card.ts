import { CardParams } from '../types';

const MAX_RANK = 15;

export function findMinRankCard(cards: Array<CardParams>): CardParams {
  return cards.reduce((acc, card) => {
    if ((acc.rank || MAX_RANK) > card.rank) {
      return card;
    }

    return acc;
  }, {} as CardParams);
}