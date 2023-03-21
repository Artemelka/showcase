import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { BaseAction } from "@/app";
import {
  clearPlaces,
  enemyPlaceSelector,
  isPlayerStepSelector,
  playerBankSelector,
  playerPlaceSelector,
  setPlayerBank,
  toggleStep,
  isPlayerAttackSelector,
  setDeckBank,
  deckBankSelector,
} from '../../redux';
import { MAX_CARD_COUNTER } from '../../constants';
import { getCardsFromDeck } from '../../utils';
import { CardParams, DurakGameStore } from '../../types';
import styles from './table-actions.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-actions';

type Actions = {
  clearPlaces: () => void;
  setDeckBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  toggleStep: () => void;
};

type StateProps = {
  cards: Array<CardParams>;
  deck: Array<CardParams>;
  enemyPlace: Array<CardParams>;
  isPlayerStep: boolean;
  isPlayerAttack: boolean;
  playerPlace: Array<CardParams>;
};

type Props = StateProps & Actions;

export class TableActionsComponent extends Component<Props> {
  handlePickUpClick = () => {
    const { cards, enemyPlace, playerPlace } = this.props;
    const nextCards = [...cards, ...enemyPlace, ...playerPlace];

    this.props.setPlayerBank(nextCards);
    this.props.clearPlaces();
    this.props.toggleStep();
  };

  handleEndClick = () => {
    // const { cards, deck } = this.props;
    //
    // if (deck.length && cards.length < MAX_CARD_COUNTER) {
    //   const { nextDeck, nextCards } = getCardsFromDeck(cards, deck);
    //
    //   this.props.setDeckBank(nextDeck);
    //   this.props.setPlayerBank(nextCards);
    // }

    this.props.clearPlaces();
    this.props.toggleStep();
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <Button
            onClick={this.handleEndClick}
            themeColor="secondary"
            value="end"
            disabled={!this.props.isPlayerAttack}
          />
        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <Button
            onClick={this.handlePickUpClick}
            themeColor="error"
            value="pick Up"
            disabled={!this.props.isPlayerStep}
          />
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  cards: playerBankSelector(state),
  deck: deckBankSelector(state),
  enemyPlace: enemyPlaceSelector(state),
  isPlayerAttack: isPlayerAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerPlace: playerPlaceSelector(state),
});

const mapDispatchToProps: Actions = {
  clearPlaces,
  setDeckBank,
  setPlayerBank,
  toggleStep,
};

export const TableActions = connect(mapStateToProps, mapDispatchToProps)(TableActionsComponent);