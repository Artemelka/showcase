import { CardParams } from '@/pages/games-page/types';

type Values = {
  nextPlayerCards: Array<CardParams>;
  currentCard: CardParams;
};

const INITIAL_VALUES: Values = {
  nextPlayerCards: [],
  currentCard: {} as CardParams,
};

export function prepareCardsForStep(
  cards: Array<CardParams>,
  id: CardParams['id'],
): Values {
  return cards.reduce((acc, card) => {
    if (card.id === id) {
      return {
        ...acc,
        currentCard: card,
      };
    }

    return {
      ...acc,
      nextPlayerCards: [...acc.nextPlayerCards, card],
    };
  }, INITIAL_VALUES);
}
