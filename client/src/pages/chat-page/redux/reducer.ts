import { createSlice } from '@reduxjs/toolkit';
import { AsyncReducerItem } from '@artemelka/redux-store-injector';
import { INITIAL_STATE, CHAT_REDUCER_NAME } from './constants';
import { ChatState, ChatReducerCase } from './types';

const chatReducerSlice  = createSlice<ChatState, ChatReducerCase>({
  name: CHAT_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push(payload);
    },
    addInUserList: (state, { payload }) => {
      state.usersList.push(payload)
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUsersList: (state, { payload }) => {
      state.usersList = payload;
    },
  }
});

export const {
  addMessage,
  addInUserList,
  setUser,
  setUsersList,
} = chatReducerSlice.actions;

export const CHAT_REDUCER_INJECT_CONFIG: AsyncReducerItem = {
  name: CHAT_REDUCER_NAME,
  reducer: chatReducerSlice.reducer
}