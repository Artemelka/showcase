export function getMixArray<Item>(deck: Array<Item>): Array<Item> {
  const array = [...deck].sort(() => Math.random() - 0.5);

  for (let iterator = array.length - 1; iterator > 0; iterator - 1) {
    const random = Math.floor(Math.random() * (iterator + 1));

    [array[iterator], array[random]] = [array[random], array[iterator]];
  }

  return array;
}
