import { AuthApi } from '../../_fake-server';

const authApi = new AuthApi();

export const AUTH = {
  INIT: authApi.init,
  LOGOUT: authApi.logOut,
  LOGIN: authApi.logIn,
};

export type { Auth, User, UserRole } from '../../_fake-server';