import { put, call, select } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import { routerLocationSelector } from '../../../../../../../../../app';
import { API } from '../../../../../../../../../api';
import { TODO_CHILDREN_PATH } from '../../../../../constants';
import { setItem, setLoadingStart, setLoadingStop } from '../../reducer';

export function* getItemWorkerSaga() {
  yield put(setLoadingStart());
  const { query } = yield select(routerLocationSelector);

  try {
    const response = yield call(API.TODO.getTodoItem, query.id);

    if (response.length) {
      yield put(setItem(response[0]));
    } else {
      yield put(replace(TODO_CHILDREN_PATH.LIST));
    }
  } catch (error) {
    console.log('=== Error in getItemWorkerSaga ===', error);
  } finally {
    yield put(setLoadingStop());
  }
}