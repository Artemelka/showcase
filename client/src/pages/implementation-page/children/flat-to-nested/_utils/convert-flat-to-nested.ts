import { FlatItemData, NestedData } from '../types';

const INITIAL_RESULT = { name: '', children: [] } ;

export function convertFlatToNested(items: Array<FlatItemData>): NestedData {
  const mutableMap = items.reduce((acc: Record<number, NestedData>, { id, name }) => {
    return {
      ...acc,
      [id]: {
        name,
        children: [] as Array<NestedData>,
      },
    };
  }, {});

  return items.reduce((acc: NestedData, { id, parentId }) => {
    if (!parentId) {
      return mutableMap[id];
    }

    const child = mutableMap[id];

    mutableMap[parentId].children.push(child);

    return acc;
  }, INITIAL_RESULT);
}