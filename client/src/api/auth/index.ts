import { AuthApi } from '../../_fake-server';

const authApi = new AuthApi();

export const AUTH = {
  INIT: authApi.init
};

export type { Auth, UserRole } from '../../_fake-server';