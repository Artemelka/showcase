import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  DropdownItemParams,
  InputChangeEvent,
  SelectChangeEvent,
} from '@artemelka/react-components';
import { GameActions } from '../../../../_components';
import { AppStoreWithGameRedux } from '../../../../types';
import {
  gameCellsSelector,
  gameIsStartedSelector,
  gameIsFailSelector,
  gameScoreSelector,
  gameSpeedSelector,
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
}) => {
  return (
    <GameActions
      isStarted={isStarted}
      isFail={isFail}
      cells={`${cells.length}`}
      gameSpeed={gameSpeed}
      onCellsChange={onCellsChange}
      onRefresh={onRefresh}
      onGameSpeedChange={onGameSpeedChange}
      onStartClick={onStartClick}
      score={score}
    />
  );
};

const mapStateToProps = (state: AppStoreWithGameRedux): MapStateToProps => ({
  cells: gameCellsSelector(state),
  gameSpeed: gameSpeedSelector(state),
  isStarted: gameIsStartedSelector(state),
  isFail: gameIsFailSelector(state),
  score: gameScoreSelector(state),
});

export const ConnectedGameActions = connect(mapStateToProps)(GameActionsWrapper);