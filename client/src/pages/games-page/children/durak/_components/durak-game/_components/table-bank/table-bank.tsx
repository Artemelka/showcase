import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fastClassNames, NOOP } from '@/utils';
import { CardParams } from '@/pages/games-page/types';
import {
  clearPlaces,
  deckBankSelector,
  enemyBankSelector,
  isEnemyAttackSelector,
  isNeedUpdateCardsSelector,
  isPlayerAttackSelector,
  isPlayerStepSelector,
  playerBankSelector,
  restoreIsNeedUpdateCards,
  setDeckBank,
  setEnemyBank,
  setPlayerBank,
  toggleStep,
  trumpCardSelector,
} from '../../redux';
import { getCardsFromDeck } from '../../utils';
import { DurakGameStore } from '../../types';
import { Card } from '../card';
import styles from './table-bank.module.scss';
import {BaseAction} from "@/app";

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-bank';

type Actions = {
  clearPlaces: () => void;
  restoreIsNeedUpdateCards: () => void;
  setDeckBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  setEnemyBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  toggleStep: () => void;
};

type StateProps = {
  deck: Array<CardParams>;
  enemyBank: Array<CardParams>;
  isEnemyAttack: boolean;
  isNeedUpdateCards: boolean;
  isPlayerAttack: boolean;
  isPlayerStep: boolean;
  playerBank: Array<CardParams>;
  trumpCard: CardParams;
};

type Props = StateProps & Actions;

export class TableBankComponent extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    const { deck, enemyBank, isNeedUpdateCards, playerBank } = this.props;

    if (isNeedUpdateCards && deck.length) {
      const {
        nextDeck,
        nextEnemyCards,
        nextPlayerCards,
      } = getCardsFromDeck({ deck, enemyBank, playerBank });

      if (nextEnemyCards.length) {
        this.props.setEnemyBank(nextEnemyCards);
      }

      if (nextPlayerCards.length) {
        this.props.setPlayerBank(nextPlayerCards);
      }

      this.props.setDeckBank(nextDeck);
      this.props.clearPlaces();
      this.props.restoreIsNeedUpdateCards();
      this.props.toggleStep();
    }
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <Card card={this.props.trumpCard} onClick={NOOP} disabled />
        <div className={cn(`${CLASS_NAME}__counter`)}>
          Bank: {this.props.deck.length}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  deck: deckBankSelector(state),
  enemyBank: enemyBankSelector(state),
  isEnemyAttack: isEnemyAttackSelector(state),
  isNeedUpdateCards: isNeedUpdateCardsSelector(state),
  isPlayerAttack: isPlayerAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerBank: playerBankSelector(state),
  trumpCard: trumpCardSelector(state),
});

const mapDispatchToProps: Actions = {
  clearPlaces,
  restoreIsNeedUpdateCards,
  setDeckBank,
  setEnemyBank,
  setPlayerBank,
  toggleStep,
}

export const TableBank = connect(mapStateToProps, mapDispatchToProps)(TableBankComponent);