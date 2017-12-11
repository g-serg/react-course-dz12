import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import logo from './res/Logo-white.svg';
import TradeSwitcher from '../TradeSwitcher';
import TradeGraph from '../TradeGraph';
import * as TE from './TradeElements';

const enhance = compose(withRouter, pure);

export const Trade = props => {
  return (
    <div style={{height: '100%'}}>
      <TE.Header>
        <TE.HeaderWrapper>
          <TE.Logo src={logo} alt="Logo" />
          <TradeSwitcher />
          <span>User email</span>
        </TE.HeaderWrapper>
      </TE.Header>
      <TradeGraph />
      <TE.Footer>
        <TE.FooterWrapper>footer</TE.FooterWrapper>
      </TE.Footer>
    </div>
  );
};

export default enhance(Trade);
