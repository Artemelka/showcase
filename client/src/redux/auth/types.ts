import { CaseReducer } from '@reduxjs/toolkit';
import { User, Auth } from '@/api';
import { BaseAction } from '@/app';
import { AUTH_REDUCER_NAME } from './constants';

export type AuthState = Auth & {
  isLoading: boolean;
  isLoginLoading: boolean;
};

export type SetAuthInitAction = BaseAction<AuthState>;
export type SetAuthIsLoginAction = BaseAction<boolean>;
export type SetAuthUserAction = BaseAction<User>;

export type AuthReducerCase = {
  authInit: CaseReducer<AuthState, SetAuthInitAction>;
  setAuthIsLogin: CaseReducer<AuthState, SetAuthIsLoginAction>;
  setStartAuthInit: CaseReducer<AuthState>;
  setStartAuthLogin: CaseReducer<AuthState>;
  setStopAuthInit: CaseReducer<AuthState>;
  setStopAuthLogin: CaseReducer<AuthState>;
  setAuthUser: CaseReducer<AuthState, SetAuthUserAction>;
};

export type AuthStore = { [AUTH_REDUCER_NAME]: AuthState };
