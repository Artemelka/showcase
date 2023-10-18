import { select, put } from 'redux-saga/effects';
import { checkFail, getRandomApple } from '../../../../../utils';
import { SnakeBodyItem } from '../../../../../types';
import {
  gameAppleItemSelector,
  gameCellsSelector,
  gameDirectionSelector,
  gameSnakeBodySelector,
} from '../../selectors';
import {
  setStopGame,
  setIsFail,
  updateScore,
  updateSnakeBody,
  setAppleItem,
} from '../../actions';

export function* gameStepSaga() {
  const direction = yield select(gameDirectionSelector);
  const appleItem = yield select(gameAppleItemSelector);
  const snakeBody = yield select(gameSnakeBodySelector);
  const cells = yield select(gameCellsSelector);

  const head = {
    x: snakeBody[0].x + direction.x,
    y: snakeBody[0].y + direction.y,
  };

  let nextBody: Array<SnakeBodyItem> = [head, ...snakeBody.slice(0, -1)];

  try {
    const isFail = checkFail({ body: snakeBody, head, length: cells.length });

    if (isFail) {
      throw new Error('game over');
    }

    if (appleItem.x === head.x && appleItem.y === head.y) {
      nextBody = [head, ...snakeBody];
      const nextApple = getRandomApple(nextBody, cells.length);

      yield put(updateScore());
      yield put(setAppleItem(nextApple));
    }

    yield put(updateSnakeBody(nextBody));
  } catch (error) {
    yield put(setStopGame());
    yield put(setIsFail());
  }
}
