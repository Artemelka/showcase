import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { BaseAction } from "@/app";
import {
  enemyPlaceSelector,
  isPlayerAttackSelector,
  isPlayerStepSelector,
  playerBankSelector,
  playerPlaceSelector,
  setIsNeedUpdateCards,
  setPlayerBank,
  toggleStep,
} from '../../redux';
import { CardParams, DurakGameStore } from '../../types';
import styles from './table-actions.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-actions';

type Actions = {
  setIsNeedUpdateCards: () => void;
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  toggleStep: () => void;
};

type StateProps = {
  cards: Array<CardParams>;
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
    this.props.setIsNeedUpdateCards();
  };

  handleEndClick = () => {
    this.props.setIsNeedUpdateCards();
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
  enemyPlace: enemyPlaceSelector(state),
  isPlayerAttack: isPlayerAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerPlace: playerPlaceSelector(state),
});

const mapDispatchToProps: Actions = {
  setIsNeedUpdateCards,
  setPlayerBank,
  toggleStep,
};

export const TableActions = connect(mapStateToProps, mapDispatchToProps)(TableActionsComponent);