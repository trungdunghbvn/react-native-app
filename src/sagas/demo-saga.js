import { takeEvery, call, put } from 'redux-saga/effects';
import {
    ADD_COUNT
} from '../constants/index';

import { Service } from './service';
function* getToken(action) {
    try {
        let data = yield call(Service.getToken, action);
        console.log(data)
        // yield put({ type: GET_USER, data });
    } catch (error) {
        // yield put({ type: GET_USER, error });
    }
}
function* demoSaga() {
    yield takeEvery(ADD_COUNT, getToken);
}

export default demoSaga;