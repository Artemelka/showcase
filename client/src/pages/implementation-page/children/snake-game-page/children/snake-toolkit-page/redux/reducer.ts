import { createSlice } from '@reduxjs/toolkit';
import { GAME_TOOLKIT_REDUCER_NAME } from '../../../constants';
import { getInitialState } from '../../../utils';
import { GameState, GameReducerCase } from '../../../types';

const gameReducerSlice = createSlice<GameState, GameReducerCase>({
  name: GAME_TOOLKIT_REDUCER_NAME,
  initialState: getInitialState(),
  reducers: {
    refreshGame: (state, { payload }) => {
      const nextState = getInitialState(payload);

      state.appleItem = nextState.appleItem;
      state.cells = nextState.cells;
      state.direction = nextState.direction;
      state.gameSpeed = nextState.gameSpeed;
      state.isFail = nextState.isFail;
      state.isStarted = nextState.isStarted;
      state.score = nextState.score;
      state.snakeBody = nextState.snakeBody;

      // state = getInitialState(payload);
    },
    setAppleItem: (state, { payload }) => {
      state.appleItem = payload;
    },
    setDirection: (state, { payload }) => {
      state.direction = payload;
    },
    setGameSpeed: (state, { payload }) => {
      state.gameSpeed = payload;
    },
    setIsFail: (state) => {
      state.isFail = true;
    },
    setStartGame: (state) => {
      state.isStarted = true;
    },
    setStopGame: (state) => {
      state.isStarted = false;
    },
    updateScore: (state) => {
      state.score = state.score + 1;
    },
    updateSnakeBody: (state, { payload }) => {
      state.snakeBody = payload
    },
  }
});

export const {
  refreshGame,
  setStartGame,
  setStopGame,
  setDirection,
  setGameSpeed,
  setAppleItem,
  setIsFail,
  updateScore,
  updateSnakeBody,
} = gameReducerSlice.actions;

export const GAME_REDUCER_INJECT_CONFIG = {
  name: GAME_TOOLKIT_REDUCER_NAME,
  reducer: gameReducerSlice.reducer,
};