import { CardParams } from '@/pages/games-page/types';
import { findMinRankCard } from './find-min-rank-card';

type CardMap = {
  cardsWithoutTrumps: Array<CardParams>;
  trumpCards: Array<CardParams>;
};

const INITIAL_VALUE: CardMap = { trumpCards: [], cardsWithoutTrumps: [] };

type Values = {
  card?: CardParams;
  trump?: CardParams;
};

export function getNextCards(
  cards: Array<CardParams>,
  trumpCard: CardParams,
): Values {
  const { cardsWithoutTrumps, trumpCards } = cards.reduce((acc, card) => {
    if (card.suit === trumpCard.suit) {
      return {
        ...acc,
        trumpCards: [...acc.trumpCards, card],
      };
    }

    return {
      ...acc,
      cardsWithoutTrumps: [...acc.cardsWithoutTrumps, card],
    };
  }, INITIAL_VALUE);

  const currentCard = findMinRankCard(cardsWithoutTrumps);
  const currentTrumpCard = findMinRankCard(trumpCards);

  return {
    card: currentCard,
    trump: currentTrumpCard,
  };
}
