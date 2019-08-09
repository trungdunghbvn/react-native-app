import { all } from 'redux-saga/effects';
import demoSaga from './demo-saga';

function* rootSaga() {
  yield all([
    demoSaga()
  ]);
}

export default rootSaga;