import { CardParams } from '@/pages/games-page/types';

type ReturnValue = {
  enemyCards: Array<CardParams>;
  playerCards: Array<CardParams>;
  deck: Array<CardParams>;
};

const INITIAL_RESULT: ReturnValue = {
  enemyCards: [],
  playerCards: [],
  deck: [],
};

export function getPlayersCards(deck: Array<CardParams>): ReturnValue {
  return deck.reduce(
    (acc, card, index) => {
      if (index > 11) {
        return {
          ...acc,
          deck: [...acc.deck, card],
        };
      }

      if (index % 2) {
        return {
          ...acc,
          enemyCards: [...acc.enemyCards, card],
        };
      }

      return {
        ...acc,
        playerCards: [...acc.playerCards, card],
      };
    },
    { ...INITIAL_RESULT },
  );
}
