import { Auth, AuthState, User } from './types';

export const GUEST: User = {
  createdAt: Date.now(),
  id: '',
  login: '',
  name: '',
  role: 'guest',
};

export const USER: User = {
  createdAt: Date.now(),
  role: 'user',
  name: 'Artemelka',
  login: 'artemelka.ru@gmail.com',
  id: '1',
};

export const ADMIN: User = {
  createdAt: Date.now(),
  role: 'admin',
  name: 'Artemelka-admin',
  login: 'admin@artemelka.ru',
  id: '2',
}

export const GUEST_RESPONSE: Auth = {
  isLogin: false,
  user: GUEST,
};

export const USER_RESPONSE: Auth = {
  isLogin: true,
  user: USER,
};

export const ADMIN_RESPONSE: Auth = {
  isLogin: true,
  user: ADMIN,
};

export const INITIAL_STATE: AuthState = [
  USER_RESPONSE,
  ADMIN_RESPONSE,
];
