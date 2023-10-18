import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fastClassNames, NOOP } from '@/utils';
import { Card } from '@/pages/games-page/_components';
import { CardParams } from '@/pages/games-page/types';
import { BaseAction } from '@/app';
import {
  clearPlaces,
  deckBankSelector,
  enemyBankSelector,
  isNeedUpdateCardsSelector,
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
import styles from './table-bank.module.scss';

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
  isNeedUpdateCards: boolean;
  playerBank: Array<CardParams>;
  trumpCard: CardParams;
};

type Props = StateProps & Actions;

export class TableBankComponent extends Component<Props, never> {
  componentDidUpdate() {
    const { deck, enemyBank, isNeedUpdateCards, playerBank } = this.props;

    if (isNeedUpdateCards && deck.length) {
      const { nextDeck, nextEnemyCards, nextPlayerCards } = getCardsFromDeck({
        deck,
        enemyBank,
        playerBank,
      });

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
        <Card card={this.props.trumpCard} disabled onClick={NOOP} />
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
  isNeedUpdateCards: isNeedUpdateCardsSelector(state),
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
};

export const TableBank = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableBankComponent);
