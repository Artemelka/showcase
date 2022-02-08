export type UserRole = 'guest' | 'user';

export type Auth = {
  isLogin: boolean;
  role: UserRole;
}