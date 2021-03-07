import { DirectionItem, SnakeBodyItem } from '../types';

export function getNextHead(prevHead: SnakeBodyItem, direction: DirectionItem): SnakeBodyItem {
  return {
    x: prevHead.x + direction.x,
    y: prevHead.y + direction.y,
  }
}