import React, { PureComponent } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { fastClassNames3 } from '../../../../../../utils';
import { DIRECTION_KEYS_CODE, DIRECTION } from '../../constants';
import {
  DirectionCode,
  AppStoreWithGame,
  DirectionItem,
  SetDirectionAction,
} from '../../types';
import {
  setStartGame,
  setStopGame,
  gameStartActionSaga,
  gameIsStartedSelector,
  setDirection,
} from '../../redux';
import { ConnectedGameActions } from '../connected-game-actions';
import { GameScreen } from '../game-screen';
import style from './game.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game';

type MapStateToProps = {
  isStarted: boolean;
};
type MapDispatchToProps = {
  gameStart: () => Action<string>;
  setStartGame: () => Action<string>;
  setStopGame: () => Action<string>;
  setDirection: (direction: DirectionItem) => SetDirectionAction;
}
type GameProps = MapStateToProps & MapDispatchToProps & {};

export class GameContainer extends PureComponent<GameProps> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleDirectionChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDirectionChange);
  }

  handleDirectionChange = (event: KeyboardEvent) => {
    const { keyCode } = event;

    if (this.props.isStarted && DIRECTION_KEYS_CODE.includes(keyCode)) {
      event.preventDefault();
      this.props.setDirection(DIRECTION[(keyCode as DirectionCode)])
    }
  }

  handleStartClick = () => {
    if (this.props.isStarted) {
      this.props.setStopGame();
    } else {
      this.props.setStartGame();
      this.props.gameStart();
    }
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__container`)}>
          <ConnectedGameActions
            onStartClick={this.handleStartClick}
          />
          <div className={cn(`${CLASS_NAME}__screen`)}>
            <GameScreen />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStoreWithGame): MapStateToProps => ({
  isStarted: gameIsStartedSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  gameStart: gameStartActionSaga,
  setStartGame,
  setStopGame,
  setDirection,
};

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer);
