import { Auth } from './types';

const INITIAL_STATE: Auth = {
  isLogin: false,
  role: 'guest',
};

const USER = { isLogin: true, role: 'user' };

interface IAuthApi {
  init: () => Promise<Auth>;
}

export class AuthApi implements IAuthApi {
  private state: Auth;
  private setState: (nextState: Partial<Auth>) => void;

  constructor() {
    this.state = INITIAL_STATE;

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState,
      };
    };
  }

  public init = () => new Promise<Auth>((resolve) => {
    setTimeout(() => {
      resolve(INITIAL_STATE)
    }, 2000);
  })
}