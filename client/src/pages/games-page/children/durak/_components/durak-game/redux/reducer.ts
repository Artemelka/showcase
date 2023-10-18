import { createSlice } from '@reduxjs/toolkit';
import { DurakState, DurakGameReducerCase } from '../types';
import { DURAK_REDUCER_NAME, INITIAL_STATE } from './constants';

const gameReducerSlice = createSlice<DurakState, DurakGameReducerCase>({
  name: DURAK_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    startGame: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    addEnemyBank: (state, { payload }) => {
      state.enemyBank = [...state.enemyBank, ...payload];
    },
    setEnemyBank: (state, { payload }) => {
      state.enemyBank = payload;
    },

    addPlayerBank: (state, { payload }) => {
      state.playerBank = [...state.playerBank, ...payload];
    },
    setPlayerBank: (state, { payload }) => {
      state.playerBank = payload;
    },

    setDeckBank: (state, { payload }) => {
      state.deck = payload;
    },
    setTrumpCard: (state, { payload }) => {
      state.trumpCard = payload;
    },
    setIsNeedUpdateCards: (state) => {
      state.isNeedUpdateCards = true;
    },
    restoreIsNeedUpdateCards: (state) => {
      state.isNeedUpdateCards = false;
    },

    addEnemyPlace: (state, { payload }) => {
      state.tableEnemyPlace.push(payload);
    },
    addPlayerPlace: (state, { payload }) => {
      state.tablePlayerPlace.push(payload);
    },
    clearPlaces: (state) => {
      state.tableEnemyPlace = [];
      state.tablePlayerPlace = [];
    },

    toggleStep: (state) => {
      state.isPlayerStep = !state.isPlayerStep;
    },
  },
});

export const {
  addEnemyBank,
  addEnemyPlace,
  addPlayerBank,
  addPlayerPlace,
  clearPlaces,
  restoreIsNeedUpdateCards,
  setDeckBank,
  setEnemyBank,
  setIsNeedUpdateCards,
  setPlayerBank,
  setTrumpCard,
  startGame,
  toggleStep,
} = gameReducerSlice.actions;

export const DURAK_GAME_REDUCER_INJECT_CONFIG = {
  name: DURAK_REDUCER_NAME,
  reducer: gameReducerSlice.reducer,
};
