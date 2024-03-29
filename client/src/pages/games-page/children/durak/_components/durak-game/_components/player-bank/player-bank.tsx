import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseAction } from '@/types';
import { CardBank } from '@/pages/games-page/_components';
import { CardParams } from '@/pages/games-page/types';
import {
  playerBankSelector,
  setPlayerBank,
  addPlayerPlace,
  isPlayerStepSelector,
  toggleStep,
  isPlayerAttackSelector,
  enemyPlaceSelector,
  playerPlaceSelector,
  trumpCardSelector,
} from '../../redux';
import { prepareCardsForStep } from '../../utils';
import { DurakGameStore } from '../../types';

type Actions = {
  addPlayerPlace: (card: CardParams) => BaseAction<CardParams>;
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  toggleStep: () => void;
};

type StateProps = {
  cards: Array<CardParams>;
  enemyPlace: Array<CardParams>;
  isPlayerAttack: boolean;
  isPlayerStep: boolean;
  playerPlace: Array<CardParams>;
  trumpCard: CardParams;
};

type Props = Actions & StateProps;

export class PlayerBankComponent extends Component<Props> {
  makeStep = (currentCard: CardParams, nextCards: Array<CardParams>) => {
    this.props.setPlayerBank(nextCards);
    this.props.addPlayerPlace(currentCard);
    this.props.toggleStep();
  };

  getAvailableCards = () => {
    const { cards, enemyPlace, playerPlace, trumpCard, isPlayerAttack } =
      this.props;
    const attackCard = enemyPlace[enemyPlace.length - 1];

    if (!attackCard) {
      return cards;
    }

    if (isPlayerAttack) {
      const usedCards = [...enemyPlace, ...playerPlace];

      return cards.filter((card) => {
        return usedCards.some((usedCard) => {
          return card.rank === usedCard.rank;
        });
      });
    }

    return cards.filter((card) => {
      const isBiggestCard =
        card.suit === attackCard.suit && card.rank > attackCard.rank;
      const isTrumpCard =
        card.suit === trumpCard.suit && trumpCard.suit !== attackCard.suit;

      return isBiggestCard || isTrumpCard;
    });
  };

  handleCardClick = (id: string) => {
    const { cards } = this.props;

    const availableCards = this.getAvailableCards();
    const isValidCard = availableCards.filter((card) => card.id === id).length;

    if (isValidCard) {
      const { nextPlayerCards, currentCard } = prepareCardsForStep(cards, id);

      this.makeStep(currentCard, nextPlayerCards);

      return;
    }

    /* eslint-disable no-console */
    console.log('=== invalid step ===');
  };

  render() {
    return (
      <CardBank
        cards={this.props.cards}
        isDisabledCard={!this.props.isPlayerStep}
        onClick={this.handleCardClick}
      />
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  cards: playerBankSelector(state),
  enemyPlace: enemyPlaceSelector(state),
  isPlayerAttack: isPlayerAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerPlace: playerPlaceSelector(state),
  trumpCard: trumpCardSelector(state),
});

const mapDispatchToProps: Actions = {
  addPlayerPlace,
  setPlayerBank,
  toggleStep,
};

export const PlayerBank = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerBankComponent);
