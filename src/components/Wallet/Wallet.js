import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';
import WalletRecord from '../WalletRecord';
import {getIsLoading, getError} from '../../reducers/wallet';

const Container = styled.div`
  width: 450px;
`;

const Error = styled.div`
  color: red;
`;

const enhance = compose(
  withRouter,
  connect(store => ({
    isLoading: getIsLoading(store),
    error: getError(store),
  })),
  pure,
);

export const Wallet = props => {
  const {isLoading, error} = props;

  return (
    <Container>
      <h2>Ваш счет</h2>
      {isLoading ? (
        <Spinner gap={5} />
      ) : (
        ['usd', 'btc', 'eth'].map(currency => <WalletRecord key={currency} currency={currency} />)
      )}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default enhance(Wallet);
