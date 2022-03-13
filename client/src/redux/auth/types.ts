import { User, Auth } from '@/api';
import { AppStore, BaseAction } from '@/app';
import { AUTH_REDUCER_NAME } from './constants';

export type AuthState = Auth & {
  isLoading: boolean;
  isLoginLoading: boolean;
};

export type SetAuthInitAction = BaseAction<AuthState>;
export type SetAuthIsLoginAction = BaseAction<boolean>;
export type SetAuthUserAction = BaseAction<User>;

export type AuthReducerCase = {
  authInit: (state: AuthState, action: SetAuthInitAction) => void;
  setAuthIsLogin: (state: AuthState, action: SetAuthIsLoginAction) => void;
  setStartAuthInit: (state: AuthState) => void;
  setStartAuthLogin: (state: AuthState) => void;
  setStopAuthInit: (state: AuthState) => void;
  setStopAuthLogin: (state: AuthState) => void;
  setAuthUser: (state: AuthState, action: SetAuthUserAction) => void;
};

export type AppStoreWithAuth = AppStore & {[AUTH_REDUCER_NAME]: AuthState}
