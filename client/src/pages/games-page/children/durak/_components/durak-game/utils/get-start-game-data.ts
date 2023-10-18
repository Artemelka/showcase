import { CARD_DECK } from '@/pages/games-page/_constants/cards';
import { INITIAL_STATE } from '../redux';
import { DurakState } from '../types';
import { getPlayersCards } from './get-players-cards';
import { mixDeck } from './mix-deck';
import { getGameTrumpCard } from './get-game-trump-card';
import { checkIsPlayerStep } from './check-is-player-step';

export function getStartGameData(): DurakState {
  const mixedGameDeck = mixDeck([...CARD_DECK]);
  const { enemyCards, playerCards, deck } = getPlayersCards(mixedGameDeck);
  const trumpCard = getGameTrumpCard(deck);
  const isPlayerStep = checkIsPlayerStep(
    enemyCards,
    playerCards,
    trumpCard.suit,
  );

  return {
    ...INITIAL_STATE,
    enemyBank: enemyCards,
    playerBank: playerCards,
    deck,
    trumpCard,
    isPlayerStep,
  };
}
