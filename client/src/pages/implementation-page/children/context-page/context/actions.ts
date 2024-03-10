import type { Action } from 'redux';
import type { BaseAction } from '@/types';

export const SIGNUP_START = 'SIGNUP/START';
export const signUpStart = (): Action => ({
  type: SIGNUP_START,
});

export const SIGNUP_SUCCESS = 'SIGNUP/SUCCESS';
export const signUpSuccess = (name: string): BaseAction<string> => ({
  type: SIGNUP_SUCCESS,
  payload: name,
});

export const SIGNUP_STOP = 'SIGNUP/STOP';
export const signUpStop = (): Action => ({
  type: SIGNUP_STOP,
});
