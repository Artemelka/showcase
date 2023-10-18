import { SignUpApi } from '@/_fake-server';

const signUpApi = new SignUpApi();

const FAKE_SIGN_UP = {
  SIGN: signUpApi.signUp,
};

export const SIGN_UP = FAKE_SIGN_UP;

export type { SignUpResponse } from '@/_fake-server';
