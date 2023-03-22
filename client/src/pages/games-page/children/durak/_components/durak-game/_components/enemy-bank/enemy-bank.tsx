import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseAction } from "@/app";
import {
  addEnemyPlace,
  enemyBankSelector,
  enemyPlaceSelector,
  isEnemyAttackSelector,
  isPlayerStepSelector,
  playerPlaceSelector,
  setEnemyBank,
  toggleStep,
  trumpCardSelector,
  setIsNeedUpdateCards,
} from '../../redux';
import { findCurrentCard, getNextCards } from '../../utils';
import { DurakGameStore, CardParams } from '../../types';
import { CardBank } from '../card-bank';

type Actions = {
  addEnemyPlace: (card: CardParams) => BaseAction<CardParams>;
  setEnemyBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  setIsNeedUpdateCards: () => void;
  toggleStep: () => void;
};

type StateProps = {
  cards: Array<CardParams>;
  enemyPlace: Array<CardParams>;
  isEnemyAttack: boolean;
  isPlayerStep: boolean;
  playerPlace: Array<CardParams>;
  trumpCard: CardParams;
};

type Props = StateProps & Actions;

export class EnemyBankComponent extends Component<Props> {
  componentDidUpdate() {
    const { isEnemyAttack, isPlayerStep } = this.props;

    if (isPlayerStep) {
      return;
    }

    if (isEnemyAttack) {
      this.attackStep();
      return;
    }

    this.protectionStep();
  }

  finish = () => {
    console.log('=== finish ===');
  }

  firstAttack = () => {
    const { cards, trumpCard } = this.props;
    const { card, trump } = getNextCards(cards, trumpCard)
    const currentCard = card || trump;

    if (currentCard) {
      this.makeStep(currentCard);
      return;
    }

    console.error('ERROR in enemy firstAttack: should be attack card');
  }

  nextAttack = () => {
    const { cards, enemyPlace, playerPlace, trumpCard } = this.props;
    const usedCards = [...enemyPlace, ...playerPlace];

    const availableCards = cards.filter(card => {
      return usedCards.some(usedCard => {
        return card.rank === usedCard.rank;
      });
    });

    const { card, trump } = getNextCards(availableCards, trumpCard);
    const currentCard = card || trump;

    if (currentCard) {
      this.makeStep(currentCard);
      return;
    }

    this.props.setIsNeedUpdateCards();
  }

  attackStep = () => {
    const { cards, enemyPlace } = this.props;

    if (!cards.length) {
      this.finish();
      return;
    }

    if (!enemyPlace.length) {
      this.firstAttack();
      return;
    }

    this.nextAttack();
  }

  pickUpCards = () => {
    const { cards, enemyPlace, playerPlace } = this.props;
    const nextCards = [...cards, ...enemyPlace, ...playerPlace];

    this.props.setEnemyBank(nextCards);
    this.props.setIsNeedUpdateCards();
  }

  protectionStep = () => {
    const { cards, playerPlace, trumpCard } = this.props;
    const { currentCard } = findCurrentCard(cards, playerPlace[playerPlace.length - 1], trumpCard);

    if (currentCard) {
      this.makeStep(currentCard);
      return;
    }

    this.pickUpCards();
  }

  makeStep = (currentCard: CardParams) => {
    const { cards } = this.props;
    const nextCards = cards.filter(card => card.id !== currentCard.id);

    this.props.setEnemyBank(nextCards);
    this.props.addEnemyPlace(currentCard);
    this.props.toggleStep();
  }

  render() {
    return (
      <CardBank
        cards={this.props.cards}
        isDisabledCard
        isHiddenCard
      />
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  cards: enemyBankSelector(state),
  enemyPlace: enemyPlaceSelector(state),
  isEnemyAttack: isEnemyAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerPlace: playerPlaceSelector(state),
  trumpCard: trumpCardSelector(state),
});

const mapDispatchToProps: Actions = {
  addEnemyPlace,
  setEnemyBank,
  setIsNeedUpdateCards,
  toggleStep,
}

export const EnemyBank = connect(mapStateToProps, mapDispatchToProps)(EnemyBankComponent);