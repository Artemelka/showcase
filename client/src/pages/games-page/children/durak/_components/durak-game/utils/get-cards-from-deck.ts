import { CardParams } from '@/pages/games-page/types';
import { MAX_CARD_COUNTER } from '../constants';

type Params = {
  deck: Array<CardParams>;
  enemyBank: Array<CardParams>;
  playerBank: Array<CardParams>;
};

type Values = {
  nextDeck: Array<CardParams>;
  nextEnemyCards: Array<CardParams>;
  nextPlayerCards: Array<CardParams>;
};

export function getCardsFromDeck({
  deck,
  enemyBank,
  playerBank,
}: Params): Values {
  const enemyCounter = MAX_CARD_COUNTER - enemyBank.length;
  const nextEnemyCards = deck.filter(
    (_, enemyIndex) => enemyIndex < enemyCounter,
  );

  const tempDeck = deck.filter((tempCard) =>
    nextEnemyCards.every((everyCard) => everyCard.id !== tempCard.id),
  );

  const playerCounter = MAX_CARD_COUNTER - playerBank.length;
  const nextPlayerCards = tempDeck.filter(
    (_, playerIndex) => playerIndex < playerCounter,
  );

  const nextDeck = tempDeck.filter((deckCard) =>
    nextPlayerCards.every((card) => card.id !== deckCard.id),
  );

  return {
    nextDeck,
    nextEnemyCards: [...enemyBank, ...nextEnemyCards],
    nextPlayerCards: [...playerBank, ...nextPlayerCards],
  };
}
