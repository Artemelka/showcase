import { MAX_CARD_COUNTER } from '../constants';
import { CardParams } from '../types';

type Values = {
  nextCards: Array<CardParams>;
  nextDeck: Array<CardParams>;
}

export function getCardsFromDeck(cards: Array<CardParams>, deck: Array<CardParams>): Values {
  const getCardCounter = MAX_CARD_COUNTER - cards.length;
  const nextCards = deck.filter((_, index) => index < getCardCounter);
  const nextDeck = deck.filter((_, index) => index >= getCardCounter);

  return {
    nextCards: [...cards, ...nextCards],
    nextDeck,
  };
}