import { call, put, select } from 'redux-saga/effects';
import { API } from '../../../../../../../api';
import {
  setItems,
  startLoader,
  stopLoader,
  setPagination,
} from '../../reducer';
import {
  todoActiveCategorySelector,
  todoFilterStatusesSelector,
  todoPaginationSelector,
} from '../../selectors';
import { Response, GetCategoryParams } from '../../types';

export function* getListWorkerSaga() {
  yield put(startLoader());

  const { limit: itemCount, offset: skip } = yield select(todoPaginationSelector);
  const category = yield select(todoActiveCategorySelector);
  const statuses = yield select(todoFilterStatusesSelector);

  const params: GetCategoryParams = {
    category: category === 'all' ? '' : category,
    limit: itemCount,
    offset: skip,
    statuses,
  };

  try{
    const { items, total, limit, offset }: Response = yield call(API.TODO.getCategory, params);

    yield put(setItems(items));
    yield put(setPagination({ limit, offset, total }))
  } catch (error) {
    console.error('=== Error in getListWorkerSaga ===', error);
  } finally {
    yield put(stopLoader());
  }
}