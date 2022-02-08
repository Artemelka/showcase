export type UserRole = 'guest' | 'user' | 'admin';

export type User = {
  createdAt: number;
  id: string;
  login: string;
  name: string;
  role: UserRole;
};

export type Auth = {
  isLogin: boolean;
  user: User;
}

export type AuthState = Array<Auth>;