import { Auth, AuthState, User } from './types';
import { INITIAL_STATE, GUEST_RESPONSE } from './constants';

interface IAuthApi {
  init: (params: { userId?: string }) => Promise<Auth>;
  logOut: () => Promise<Auth>;
  logIn: (params: { userId?: string }) => Promise<Auth>;
}

export class AuthApi implements IAuthApi {
  private state: AuthState;

  private idCounter = 2;

  constructor() {
    this.state = INITIAL_STATE;
  }

  private setState = (nextState: Auth): void => {
    this.state = [...this.state, nextState];
  };

  private createGuest = (): User => {
    this.idCounter += 1;

    return {
      createdAt: Date.now(),
      role: 'guest',
      name: '',
      login: '',
      id: `${this.idCounter}`,
    };
  };

  public init = ({ userId = '' }): Promise<Auth> => {
    const targetUser = this.state.find((auth) => auth.user.id === userId);

    if (targetUser) {
      return Promise.resolve(targetUser);
    }

    const newGuest = {
      isLogin: false,
      user: this.createGuest(),
    };

    this.setState(newGuest);

    return Promise.resolve(newGuest);
  };

  public logIn = ({ userId = '' }) =>
    new Promise<Auth>((resolve, reject) => {
      setTimeout(() => {
        const targetUser = this.state.find((auth) => auth.user.id === userId);

        if (targetUser) {
          resolve(targetUser);
        }

        /* eslint-disable prefer-promise-reject-errors */
        reject({
          errorCode: 403,
          errorMessage: 'User not found',
        });
      }, 2000);
    });

  public logOut = () => Promise.resolve(GUEST_RESPONSE);
}
