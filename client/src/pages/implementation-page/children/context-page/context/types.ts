export type State = {
  isLoading: boolean;
  userName: string;
};

export type WithContextProps = {
  state: State;
  dispatch: (a: any) => void;
};
