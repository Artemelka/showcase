import type { Action, BaseAction } from './types';

export const SIGNUP_START = 'SIGNUP/START';
export const signUpStart = (): BaseAction => ({
  type: SIGNUP_START,
});

export const SIGNUP_SUCCESS = 'SIGNUP/SUCCESS';
export const signUpSuccess = (name: string): Action<string> => ({
  type: SIGNUP_SUCCESS,
  payload: name,
});

export const SIGNUP_STOP = 'SIGNUP/STOP';
export const signUpStop = (): BaseAction => ({
  type: SIGNUP_STOP,
});
