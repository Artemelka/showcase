import {
  authIsLoadingSelector,
  authIsLoginSelector,
  authLoginIsLoadingSelector,
  authUserRoleSelector,
  authUserSelector,
} from './selectors';
import { INITIAL_STATE, AUTH_REDUCER_NAME } from './constants';

describe('auth selectors', () => {
  const TEST_STATE = {
    [AUTH_REDUCER_NAME]: INITIAL_STATE,
  };

  test('authIsLoadingSelector', () => {
    const result = authIsLoadingSelector(TEST_STATE);

    expect(result).toBe(INITIAL_STATE.isLoading);
  });

  test('authIsLoginSelector', () => {
    const result = authIsLoginSelector(TEST_STATE);

    expect(result).toBe(INITIAL_STATE.isLogin);
  });

  test('authLoginIsLoadingSelector', () => {
    const result = authLoginIsLoadingSelector(TEST_STATE);

    expect(result).toBe(INITIAL_STATE.isLoginLoading);
  });

  test('authUserRoleSelector', () => {
    const result = authUserRoleSelector(TEST_STATE);

    expect(result).toBe(INITIAL_STATE.user.role);
  });

  test('authUserSelector', () => {
    const result = authUserSelector(TEST_STATE);

    expect(result).toEqual(INITIAL_STATE.user);
  });
});