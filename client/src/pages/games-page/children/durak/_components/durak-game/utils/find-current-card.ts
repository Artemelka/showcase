import { CardParams } from '@/pages/games-page/types';
import { findAvailableCards } from './find-available-cards';
import { findMinRankCard } from './find-min-rank-card';

type Values = {
  currentCard?: CardParams;
};

export function findCurrentCard(
  cards: Array<CardParams>,
  currentCard: CardParams,
  trumpCard: CardParams,
): Values {
  const availableCards = findAvailableCards(cards, currentCard);

  if (availableCards.length) {
    const nextCard = findMinRankCard(availableCards);

    return {
      currentCard: nextCard,
    };
  }

  const availableTrumpCards = findAvailableCards(cards, trumpCard);

  if (availableTrumpCards.length) {
    const nextCard = findMinRankCard(availableTrumpCards);

    return {
      currentCard: nextCard,
    };
  }

  return {};
}
