export function getEmptyCells(state: Array<string>): Array<number> {
  return state.reduce((acc: Array<number>, cellValue, index) => {
    if (!Boolean(cellValue)) {
      acc.push(index);
    }

    return acc;
  }, []);
}