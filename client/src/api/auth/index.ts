// import { AuthApi } from '../../_fake-server';

// const authApi = new AuthApi();

// export const AUTH = {
//   INIT: authApi.init,
//   LOGOUT: authApi.logOut,
//   LOGIN: authApi.logIn,
// };

import { ApiRequest } from '../utils';
import { User } from '../../_fake-server';

export const AUTH = {
  INIT: (params?: { userId: string }) => {
    return ApiRequest.post<User>('http://localhost:8080/api/v1/auth', { body: params || {} });
  },
  LOGOUT: () => {
    return ApiRequest.get('http://localhost:8080/api/v1/auth/logout');
  },
  LOGIN: (params: { userId: string }) => {
    return ApiRequest.post<User>('http://localhost:8080/api/v1/auth/login', { body: params });
  },
};

export type { Auth, User, UserRole } from '../../_fake-server';