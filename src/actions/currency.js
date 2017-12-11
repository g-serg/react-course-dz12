import {createActions} from 'redux-actions';

const {
  currency: {
    selectOffset,
    //btc
    selectBtc,
    fetchBtcRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    //eth
    selectEth,
    fetchEthRequest,
    fetchEthFailure,
    fetchEthSuccess,
  },
} = createActions({
  CURRENCY: {
    SELECT_OFFSET: undefined,
    //
    SELECT_BTC: undefined,
    FETCH_BTC_REQUEST: undefined,
    FETCH_BTC_SUCCESS: undefined,
    FETCH_BTC_FAILURE: undefined,
    //
    SELECT_ETH: undefined,
    FETCH_ETH_REQUEST: undefined,
    FETCH_ETH_FAILURE: undefined,
    FETCH_ETH_SUCCESS: undefined,
  },
});

export {
  selectOffset,
  //btc
  selectBtc,
  fetchBtcRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  //
  selectEth,
  fetchEthRequest,
  fetchEthFailure,
  fetchEthSuccess,
};
