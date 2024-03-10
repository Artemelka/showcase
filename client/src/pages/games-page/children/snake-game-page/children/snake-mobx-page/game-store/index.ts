import { makeAutoObservable } from 'mobx';
import { DropdownItemParams } from '@artemelka/react-components';
import { checkFail, getRandomApple } from '../../../utils';
import {
  CELL_QUANTITY,
  DEFAULT_SNAKE_BODY,
  DIRECTION,
  SELECT_OPTIONS,
} from '../../../constants';
import { DirectionItem, SnakeBodyItem } from '../../../types';

class SnakeGameStore {
  appleItem = getRandomApple(DEFAULT_SNAKE_BODY, CELL_QUANTITY);

  cells = [...Array(CELL_QUANTITY)].map((_, index) => index);

  direction: DirectionItem = DIRECTION[38];

  gameSpeed = [SELECT_OPTIONS[1]];

  isFail = false;

  isStarted = false;

  score = 0;

  snakeBody = DEFAULT_SNAKE_BODY;

  constructor() {
    makeAutoObservable(this);
  }

  setDirection(direction: DirectionItem) {
    this.direction = direction;
  }

  setGameSpeed(items: Array<DropdownItemParams>) {
    this.gameSpeed = items;
  }

  setStopGame() {
    this.isStarted = false;
  }

  setStartGame() {
    this.isStarted = true;

    this.setStepGame();
  }

  setStepGame() {
    const head = {
      x: this.snakeBody[0].x + this.direction.x,
      y: this.snakeBody[0].y + this.direction.y,
    };

    let nextBody: Array<SnakeBodyItem> = [head, ...this.snakeBody.slice(0, -1)];
    const isFail = checkFail({
      body: this.snakeBody,
      head,
      length: this.cells.length,
    });

    if (isFail) {
      this.isStarted = false;
      this.isFail = true;
    } else {
      if (this.appleItem.x === head.x && this.appleItem.y === head.y) {
        nextBody = [head, ...this.snakeBody];

        this.score += 1;
        this.appleItem = getRandomApple(nextBody, this.cells.length);
      }

      this.snakeBody = nextBody;

      setTimeout(() => {
        if (this.isStarted) {
          this.setStepGame();
        }
      }, this.gameSpeed[0].extraData.delay);
    }
  }

  refreshGame(value: number = CELL_QUANTITY) {
    this.appleItem = getRandomApple(DEFAULT_SNAKE_BODY, value);
    this.cells = [...Array(value)].map((_, index) => index);
    this.direction = DIRECTION[38];
    this.gameSpeed = [SELECT_OPTIONS[1]];
    this.isFail = false;
    this.isStarted = false;
    this.score = 0;
    this.snakeBody = DEFAULT_SNAKE_BODY;
  }
}

export const gameStore = new SnakeGameStore();
