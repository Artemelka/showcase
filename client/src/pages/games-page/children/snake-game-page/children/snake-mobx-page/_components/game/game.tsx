import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  InputChangeEvent,
  SelectChangeEvent,
} from '@artemelka/react-components';
import { GameActions, GameBox, ScreenRow } from '../../../../_components';
import { DIRECTION_KEYS_CODE, DIRECTION } from '../../../../constants';
import { DirectionCode } from '../../../../types';
import { gameStore } from '../../game-store';

export const Game = observer(function GameComponent() {
  const handleDirectionChange = useCallback((event: KeyboardEvent) => {
    const { keyCode } = event;
    const isArrowKey = DIRECTION_KEYS_CODE.includes(keyCode);
    const isMirrorDirection = gameStore.direction.mirror === keyCode;

    if (gameStore.isStarted && isArrowKey && !isMirrorDirection) {
      event.preventDefault();
      gameStore.setDirection(DIRECTION[keyCode as DirectionCode]);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleDirectionChange);

    return () => {
      document.removeEventListener('keydown', handleDirectionChange);
    };
  }, [handleDirectionChange]);

  const handleCellsChange = useCallback(({ value }: InputChangeEvent) => {
    gameStore.refreshGame(Number(value));
  }, []);

  const handleGameSpeedChange = useCallback(({ items }: SelectChangeEvent) => {
    gameStore.setGameSpeed(items);
  }, []);

  const handleRefreshGame = useCallback(() => {
    gameStore.refreshGame();
  }, []);

  const handleStartClick = useCallback(() => {
    if (gameStore.isStarted) {
      gameStore.setStopGame();
    } else {
      gameStore.setStartGame();
    }
  }, []);

  return (
    <GameBox
      actionsElement={
        <GameActions
          cells={`${gameStore.cells.length}`}
          gameSpeed={gameStore.gameSpeed}
          isFail={gameStore.isFail}
          isStarted={gameStore.isStarted}
          onCellsChange={handleCellsChange}
          onGameSpeedChange={handleGameSpeedChange}
          onRefresh={handleRefreshGame}
          onStartClick={handleStartClick}
          score={`${gameStore.score}`}
        />
      }
      tableRowsElement={gameStore.cells.map((y) => (
        <ScreenRow
          key={`row${y}`}
          appleItem={gameStore.appleItem}
          cells={gameStore.cells}
          snakeBody={gameStore.snakeBody}
          y={y}
        />
      ))}
    />
  );
});
