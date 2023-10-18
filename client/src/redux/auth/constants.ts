import { User } from '@/api';

export const AUTH_REDUCER_NAME = 'auth';

const GUEST: User = {
  createdAt: Date.now(),
  id: '',
  login: '',
  name: '',
  role: 'guest',
};

export const INITIAL_STATE = {
  isLoading: true,
  isLoginLoading: false,
  isLogin: false,
  user: GUEST,
} as const;
