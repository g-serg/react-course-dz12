import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import TradeLink from '../TradeLink';
import styled from 'styled-components';

export const TradeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const enhance = compose(withRouter);

export const TradeSwitcher = () => (
  <TradeWrapper>
    <TradeLink type="btc" />
    <TradeLink type="eth" />
  </TradeWrapper>
);

export default enhance(TradeSwitcher);
