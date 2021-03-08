import { GAME_REDUCER_NAME } from '../constants';
import { getInitialState } from '../utils';
import {
  REFRESH_GAME,
  SET_APPLE_ITEM,
  SET_DIRECTION,
  SET_GAME_SPEED,
  SET_IS_FAIL,
  SET_START_GAME,
  SET_STOP_GAME,
  UPDATE_SCORE,
  UPDATE_SNAKE_BODY,
} from './actions';
import { GameState } from '../types';

const gameReducer = (state: GameState = getInitialState(), { type, payload }: any) => {
  switch (type) {
    case REFRESH_GAME:
      return getInitialState();

    case SET_APPLE_ITEM:
      return {
        ...state,
        appleItem: payload,
      };

    case SET_DIRECTION:
      return {
        ...state,
        direction: payload,
      };

    case SET_GAME_SPEED:
      return {
        ...state,
        gameSpeed: payload,
      };

    case SET_IS_FAIL:
      return {
        ...state,
        isFail: true,
      }

    case SET_START_GAME:
      return {
        ...state,
        isStarted: true,
      }

    case SET_STOP_GAME:
      return {
        ...state,
        isStarted: false,
      }

    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + 1,
      }

    case UPDATE_SNAKE_BODY:
      return {
        ...state,
        snakeBody: payload,
      }

    default:
      return state;
  }
};

export const GAME_REDUCER_INJECT_CONFIG = {
  name: GAME_REDUCER_NAME,
  reducer: gameReducer,
};