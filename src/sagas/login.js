import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {loginRequest, loginSuccess, loginFailure} from '../actions/auth';
import {login} from '../api';

export function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSuccess(response.data));
  } catch (response) {
    const {message} = response.data;
    yield put(loginFailure(message));
  }
}

function* onAuthLoginWatch() {
  yield takeLatest(loginRequest, loginSaga);
}

export function* loginWatch() {
  yield fork(onAuthLoginWatch);
}
