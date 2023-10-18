type Params = {
  rows: Array<Array<number>>;
  state: Array<string>;
  symbol: string;
};

export function getWinnerRows({
  rows,
  state,
  symbol,
}: Params): Array<Array<number>> {
  return rows.filter((row) =>
    row.every((index) => Boolean(state[index]) && state[index] === symbol),
  );
}
