import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  DropdownItemParams,
  InputChangeEvent,
  SelectChangeEvent,
} from '@artemelka/react-components';
import { GameActions } from '../../../../_components';
import { AppStoreWithGameToolkit } from '../../../../types';
import {
  gameCellsSelector,
  gameIsStartedSelector,
  gameIsFailSelector,
  gameSpeedSelector,
  gameScoreSelector,
} from '../../redux';

type MapStateToProps = {
  cells: Array<number>;
  gameSpeed: Array<DropdownItemParams>;
  isFail: boolean;
  isStarted: boolean;
  score: string;
};

type GameActionsProps = MapStateToProps & {
  onCellsChange: (inputEvent: InputChangeEvent) => void;
  onGameSpeedChange: (selectEvent: SelectChangeEvent) => void;
  onRefresh: () => void;
  onStartClick: () => void;
};

export const GameActionsWrapper: FC<GameActionsProps> = ({
  cells,
  gameSpeed,
  isFail,
  isStarted,
  onCellsChange,
  onGameSpeedChange,
  onRefresh,
  onStartClick,
  score,
}) => (
  <GameActions
    cells={`${cells.length}`}
    gameSpeed={gameSpeed}
    isFail={isFail}
    isStarted={isStarted}
    onCellsChange={onCellsChange}
    onGameSpeedChange={onGameSpeedChange}
    onRefresh={onRefresh}
    onStartClick={onStartClick}
    score={score}
  />
);

const mapStateToProps = (state: AppStoreWithGameToolkit): MapStateToProps => ({
  cells: gameCellsSelector(state),
  gameSpeed: gameSpeedSelector(state),
  isStarted: gameIsStartedSelector(state),
  isFail: gameIsFailSelector(state),
  score: gameScoreSelector(state),
});

export const ConnectedGameActions = connect(mapStateToProps)(GameActionsWrapper);