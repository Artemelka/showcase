import { CardParams, Suit } from '@/pages/games-page/types';

const INITIAL_RANK = 15;

export function findMinTrumpRank(
  cards: Array<CardParams>,
  trumpSuit: Suit,
): number {
  return cards.reduce((currentRank, card) => {
    const isTrump = card.suit === trumpSuit;
    const cardRank = Number(card.rank);

    if (isTrump && currentRank > cardRank) {
      return cardRank;
    }

    return currentRank;
  }, INITIAL_RANK);
}
