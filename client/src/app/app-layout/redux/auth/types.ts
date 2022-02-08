import { UserRole, Auth } from '../../../../api';
import { AppStore, BaseAction } from '../../../types';
import { AUTH_REDUCER_NAME } from './constants';

export type AuthState = Auth & {
  isLoading: boolean;
};

export type SetAuthInitAction = BaseAction<AuthState>;
export type SetAuthIsLoginAction = BaseAction<boolean>;
export type SetAuthRoleAction = BaseAction<UserRole>;

export type AuthReducerCase = {
  authInit: (state: AuthState, action: SetAuthInitAction) => void;
  setAuthIsLogin: (state: AuthState, action: SetAuthIsLoginAction) => void;
  setAuthRole: (state: AuthState, action: SetAuthRoleAction) => void;
  setStartAuthInit: (state: AuthState) => void;
  setStopAuthInit: (state: AuthState) => void;
};

export type AppStoreWithAuth = AppStore & {[AUTH_REDUCER_NAME]: AuthState}
