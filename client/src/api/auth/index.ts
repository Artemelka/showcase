// import { AuthApi } from '@/_fake-server';
import { ApiRequest } from '../utils';
import { User } from '@/_fake-server';

// const authApi = new AuthApi();

// const FAKE_AUTH = {
//   INIT: authApi.init,
//   LOGOUT: authApi.logOut,
//   LOGIN: authApi.logIn,
// };

const TRUE_AUTH = {
  INIT: (params?: { userId: string }) => {
    return ApiRequest.post<User>('v1/auth', { body: params || {} });
  },
  LOGOUT: () => {
    return ApiRequest.get('v1/auth/logout');
  },
  LOGIN: (params: { userId: string }) => {
    return ApiRequest.post<User>('v1/auth/login', { body: params });
  },
};

export const AUTH = TRUE_AUTH;

export type { Auth, User, UserRole } from '@/_fake-server';