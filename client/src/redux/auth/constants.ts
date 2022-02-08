import { AuthState } from './types';

export const AUTH_REDUCER_NAME = 'auth';

export const INITIAL_STATE: AuthState = {
  isLoading: true,
  isLogin: false,
  role: 'guest',
};
