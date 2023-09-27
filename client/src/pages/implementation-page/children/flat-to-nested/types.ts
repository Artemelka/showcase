export type FlatItemData = {
  id: number;
  parentId?: number;
  name: string;
}

export type NestedData = {
  name: string;
  children: Array<NestedData>;
}