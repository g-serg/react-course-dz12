import {fork} from 'redux-saga/effects';
import {loginWatch} from './login';
import {registrationWatch} from './registration';
import {setTokenWatch} from './auth';
import {fetchBtcWatch, fetchEthWatch, currencyWatch} from './currency';

export default function*() {
  yield fork(setTokenWatch);
  yield fork(loginWatch);
  yield fork(registrationWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(currencyWatch);
}
