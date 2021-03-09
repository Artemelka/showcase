import { Action } from 'redux';
import { DropdownItemParams } from '@artemelka/react-components';
import {
  DirectionItem,
  RefreshGameAction,
  SetAppleItemAction,
  SetDirectionAction,
  SetGameSpeedAction,
  SnakeBodyItem,
  UpdateSnakeBodyAction,
} from '../types';

export const GAME_START_ACTION_SAGA = 'GAME_START';
export const gameStartActionSaga = (): Action<string> => ({
  type: GAME_START_ACTION_SAGA
});

export const GAME_STEP_ACTION_SAGA = 'GAME_STEP';
export const gameStepActionSaga = (): Action<string> => ({
  type: GAME_STEP_ACTION_SAGA
});

export const REFRESH_GAME = 'REFRESH_GAME';
export const refreshGame = (payload?: number): RefreshGameAction | Action<string> => ({
  type: REFRESH_GAME,
  payload,
});

export const SET_APPLE_ITEM = 'SET_APPLE_ITEM';
export const setAppleItem = (payload: SnakeBodyItem): SetAppleItemAction => ({
  type: SET_APPLE_ITEM,
  payload
});

export const SET_DIRECTION = 'SET_DIRECTION';
export const setDirection = (payload: DirectionItem): SetDirectionAction => ({
  type: SET_DIRECTION,
  payload
});

export const SET_GAME_SPEED = 'SET_GAME_SPEED';
export const setGameSpeed = (payload: Array<DropdownItemParams>): SetGameSpeedAction => ({
  type: SET_GAME_SPEED,
  payload,
});

export const SET_IS_FAIL = 'SET_IS_FAIL';
export const setIsFail = (): Action<string> => ({ type: SET_IS_FAIL });

export const SET_START_GAME = 'SET_START_GAME';
export const setStartGame = (): Action<string> => ({ type: SET_START_GAME });

export const SET_STOP_GAME = 'SET_STOP_GAME';
export const setStopGame = (): Action<string> => ({ type: SET_STOP_GAME });

export const UPDATE_SCORE = 'UPDATE_SCORE';
export const updateScore = (): Action<string> => ({ type: UPDATE_SCORE });

export const UPDATE_SNAKE_BODY = 'UPDATE_SNAKE_BODY';
export const updateSnakeBody = (payload: Array<SnakeBodyItem>): UpdateSnakeBodyAction => ({
  type: UPDATE_SNAKE_BODY,
  payload,
});