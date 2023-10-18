import { Action } from '@reduxjs/toolkit';

export const GET_LIST_SAGA = 'GET_LIST';
export const getListActionSaga = (): Action<string> => ({
  type: GET_LIST_SAGA,
});
