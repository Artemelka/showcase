import React, { PureComponent } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import {
  DropdownItemParams,
  InputChangeEvent,
  SelectChangeEvent
} from '@artemelka/react-components';
import { GameBox } from '../../../../_components';
import { DIRECTION_KEYS_CODE, DIRECTION } from '../../../../constants';
import {
  AppStoreWithGameToolkit,
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
import { ConnectedSnakeItem } from '../connected-snake-item';

type MapStateToProps = {
  cells: Array<number>;
  direction: DirectionItem;
  isStarted: boolean;
};
type MapDispatchToProps = {
  gameStart: () => Action<string>;
  refreshGame: (cells: number) => Action<string>;
  setDirection: (direction: DirectionItem) => SetDirectionAction;
  setGameSpeed: (gameSpeed: Array<DropdownItemParams>) => SetGameSpeedAction;
  setStartGame: () => Action<string>;
  setStopGame: () => Action<string>;
}
type GameProps = MapStateToProps & MapDispatchToProps & {};

export class GameContainer extends PureComponent<GameProps> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleDirectionChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDirectionChange);
  }

  handleCellsChange = ({ value }: InputChangeEvent) => {
    this.props.refreshGame(Number(value));
  };

  handleDirectionChange = (event: KeyboardEvent) => {
    const { keyCode } = event;
    const isArrowKey = DIRECTION_KEYS_CODE.includes(keyCode);
    const isMirrorDirection = this.props.direction.mirror === keyCode;

    if (this.props.isStarted && isArrowKey && !isMirrorDirection) {
      event.preventDefault();
      this.props.setDirection(DIRECTION[(keyCode as DirectionCode)])
    }
  }

  handleGameSpeedChange = ({ items }: SelectChangeEvent) => {
    this.props.setGameSpeed(items);
  }

  handleRefreshClick = () => {
    this.props.refreshGame(this.props.cells.length);
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
      <GameBox
        actionsElement={
          <ConnectedGameActions
            onCellsChange={this.handleCellsChange}
            onGameSpeedChange={this.handleGameSpeedChange}
            onRefresh={this.handleRefreshClick}
            onStartClick={this.handleStartClick}
          />
        }
        tableRowsElement={this.props.cells.map(y => (
          <tr key={`row${y}`}>
            {this.props.cells.map(x => (
              <ConnectedSnakeItem key={`cell${x}`} x={x} y={y} />
            ))}
          </tr>
        ))}
      />
    );
  }
}

const mapStateToProps = (state: AppStoreWithGameToolkit): MapStateToProps => ({
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
