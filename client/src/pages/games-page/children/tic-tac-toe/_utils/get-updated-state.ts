import { UpdatedStateConfig } from '../types';

export function getUpdatedState(
  prevState: Array<string>,
  config: UpdatedStateConfig,
) {
  const { cellIndex, symbol } = config;

  return prevState.map((prevValue, index) =>
    index === cellIndex ? symbol : prevValue,
  );
}
