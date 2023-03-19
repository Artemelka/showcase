import { findAvailableCards } from './find-available-cards';
import { findMinRankCard } from './find-min-rank-card';
import { CardParams } from '../types';

type Values = {
  currentCard?: CardParams;
  nextCards: Array<CardParams>;
}

export function findCurrentCard(cards: Array<CardParams>, currentCard: CardParams, trumpCard: CardParams): Values {
  const availableCards = findAvailableCards(cards, currentCard);

  if (availableCards.length) {
    const nextCard = findMinRankCard(availableCards);

    return {
      currentCard: nextCard,
      nextCards: cards.filter(card => card.id !== nextCard.id),
    };
  }

  const availableTrumpCards = findAvailableCards(cards, trumpCard);

  if (availableTrumpCards.length) {
    const nextCard = findMinRankCard(availableTrumpCards);

    return {
      currentCard: nextCard,
      nextCards: cards.filter(card => card.id !== nextCard.id),
    }
  }

  return {
    nextCards: [],
  };
}