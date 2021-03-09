import React, { PureComponent } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import {
  DropdownItemParams,
  InputChangeEvent,
  SelectChangeEvent
} from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../../../utils';
import { DIRECTION_KEYS_CODE, DIRECTION } from '../../../../constants';
import {
  AppStoreWithGameRedux,
  DirectionCode,
  DirectionItem,
  SetDirectionAction,
  SetGameSpeedAction,
} from '../../../../types';
import {
  gameCellsSelector,
  gameDirectionSelector,
  gameIsStartedSelector,
  gameStartActionSaga,
  refreshGame,
  setDirection,
  setGameSpeed,
  setStartGame,
  setStopGame,
} from '../../redux';
import { ConnectedGameActions } from '../connected-game-actions';
import { GameScreen } from '../game-screen';
import style from './game.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game';

type MapStateToProps = {
  cells: Array<number>;
  direction: DirectionItem;
  isStarted: boolean;
};
type MapDispatchToProps = {
  gameStart: () => Action<string>;
  refreshGame: (value?: number) => Action<string>;
  setDirection: (direction: DirectionItem) => SetDirectionAction;
  setGameSpeed: (gameSpeed: Array<DropdownItemParams>) => SetGameSpeedAction;
  setStartGame: () => Action<string>;
  setStopGame: () => Action<string>;
}
type GameProps = MapStateToProps & MapDispatchToProps;

export class GameContainer extends PureComponent<GameProps> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleDirectionChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDirectionChange);
  }

  handleDirectionChange = (event: KeyboardEvent) => {
    const { keyCode } = event;
    const isArrowKey = DIRECTION_KEYS_CODE.includes(keyCode);
    const isMirrorDirection = this.props.direction.mirror === keyCode;

    if (this.props.isStarted && isArrowKey && !isMirrorDirection) {
      event.preventDefault();
      this.props.setDirection(DIRECTION[(keyCode as DirectionCode)]);
    }
  }

  handleCellsChange = ({ value }: InputChangeEvent) => {
    this.props.refreshGame(Number(value));
  };

  handleGameSpeedChange = ({ items }: SelectChangeEvent) => {
    this.props.setGameSpeed(items);
  }

  handleRefreshGame = () => {
    this.props.refreshGame();
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
            onCellsChange={this.handleCellsChange}
            onGameSpeedChange={this.handleGameSpeedChange}
            onRefresh={this.handleRefreshGame}
            onStartClick={this.handleStartClick}
          />
          <div className={cn(`${CLASS_NAME}__screen`)}>
            <GameScreen cells={this.props.cells} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStoreWithGameRedux): MapStateToProps => ({
  cells: gameCellsSelector(state),
  direction: gameDirectionSelector(state),
  isStarted: gameIsStartedSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  gameStart: gameStartActionSaga,
  refreshGame,
  setDirection,
  setGameSpeed,
  setStartGame,
  setStopGame,
};

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer);
