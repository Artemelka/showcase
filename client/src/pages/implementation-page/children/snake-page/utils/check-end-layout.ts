import { SnakeBodyItem } from '../types';

export function checkEndLayout({ x, y }: SnakeBodyItem, cellQuantity: number): boolean {
  return x < 0 || x > cellQuantity || y < 0 || y > cellQuantity;
}