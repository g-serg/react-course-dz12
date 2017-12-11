import {loginSuccess, logout} from '../actions/auth';
import {take, put, call, select, fork} from 'redux-saga/effects';
import {setTokenApi, clearTokenApi} from '../api';
import {getIsAuthorized} from '../reducers/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from '../localStorage';

export function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
        yield put(loginSuccess());
      } else {
        const action = yield take(loginSuccess);
        token = action.payload.jwt;
      }
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}

export function* setTokenWatch() {
  yield fork(authFlow);
}
