import React, { PureComponent } from 'react';
import { getMixArray } from '@/utils';
import { CARD_DECK } from '@/pages/games-page/_constants/cards';
import { CardParams } from '@/pages/games-page/types';
import { GameView } from '../../_components';
import { getWinner, getIsPlayerLoose, getIsSkipCheck } from '../../_utils';

const DECK = [...CARD_DECK];

type Cards = Array<CardParams>;
type State = {
  enemyBank: Cards;
  enemyField: Cards;
  playerBank: Cards;
  playerField: Cards;
  isUserStep: boolean;
};

const INITIAL_STATE: State = {
  enemyBank: [],
  enemyField: [],
  playerBank: [],
  playerField: [],
  isUserStep: true,
};

type Props = Record<string, never>;

export class DrunkardClPage extends PureComponent<Props, State> {
  isInit = false;

  constructor(props: Props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    this.initGame();
  }

  componentDidUpdate() {
    if (!this.isInit) {
      return;
    }

    this.delayedStep();
  }

  initGame = () => {
    if (!this.isInit) {
      const deck = getMixArray(DECK);

      this.setState<'enemyBank' | 'playerBank'>({
        enemyBank: deck.slice(0, 18),
        playerBank: deck.slice(18, 36),
      });
      this.isInit = true;
    }
  };

  delayedStep = () => {
    setTimeout(() => {
      this.afterStepAction();
    }, 1000);
  };

  afterStepAction = () => {
    const { enemyField, enemyBank, playerField, playerBank, isUserStep } =
      this.state;

    const isEmptyFields = !enemyField.length && !playerField.length;
    const winner = getWinner({ playerBank, enemyBank });

    if (isEmptyFields && winner) {
      this.setWinner(winner);

      return;
    }

    const isSkipCheck = getIsSkipCheck({ enemyField, playerField });

    if (!isSkipCheck) {
      const fields = [...enemyField, ...playerField];
      const isPlayerLoose = getIsPlayerLoose({ enemyField, playerField });

      this.setState({
        playerBank: isPlayerLoose ? [...playerBank, ...fields] : playerBank,
        enemyBank: isPlayerLoose ? enemyBank : [...enemyBank, ...fields],
        enemyField: [],
        playerField: [],
        isUserStep: !isPlayerLoose,
      });

      return;
    }

    if (!isUserStep) {
      this.setEnemyStep();
    }
  };

  setEnemyStep = () => {
    const tempBank = [...this.state.enemyBank];
    const card = tempBank.splice(0, 1)[0];

    this.setState<'enemyField' | 'enemyBank' | 'isUserStep'>({
      enemyField: [...this.state.enemyField, card],
      enemyBank: tempBank,
      isUserStep: true,
    });
  };

  handlePlayerClick = () => {
    const tempBank = [...this.state.playerBank];
    const card = tempBank.splice(0, 1)[0];

    this.setState<'playerField' | 'playerBank' | 'isUserStep'>({
      playerField: [...this.state.playerField, card],
      playerBank: tempBank,
      isUserStep: false,
    });
  };

  setWinner = (winner: 'player' | 'enemy') => {
    /* eslint-disable no-console */
    console.log(winner, 'win!');
  };

  render() {
    const { enemyField, enemyBank, playerField, playerBank, isUserStep } =
      this.state;

    return (
      <GameView
        enemyBank={enemyBank}
        enemyField={enemyField}
        isPlayerBankDisabled={!isUserStep}
        onPlayerClick={this.handlePlayerClick}
        playerBank={playerBank}
        playerField={playerField}
      />
    );
  }
}
