export type BaseAction = {
  type: string;
};

export type Action<P> = BaseAction & {
  payload: P;
};

export type State = {
  isLoading: boolean;
  userName: string;
};

export type WithContextProps = {
  state: State;
  dispatch: (a: any) => void;
};
