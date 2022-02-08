import { User } from '../../api';
import { AuthState } from './types';

export const AUTH_REDUCER_NAME = 'auth';

const GUEST: User = {
  createdAt: Date.now(),
  id: '',
  login: '',
  name: '',
  role: 'guest',
};

export const INITIAL_STATE: AuthState = {
  isLoading: true,
  isLogin: false,
  user: GUEST,
};
