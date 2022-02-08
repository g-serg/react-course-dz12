import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import logo from './res/Logo-white.svg';
import TradeSwitcher from '../TradeSwitcher';
import TradeLayout from '../TradeLayout';
import styled from 'styled-components';

const Container = styled.header`
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2c2e;
  height: 80px;
  color: #fff;
`;

const HeaderWrapper = styled.div`
  width: 1200px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 180px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f2022;
  height: 100px;
`;

const FooterWrapper = styled.div`
  width: 1200px;
`;

const enhance = compose(withRouter, pure);

export const Trade = () => (
  <Container>
    <Header>
      <HeaderWrapper>
        <Logo src={logo} alt="Logo" />
        <TradeSwitcher />
        <span>User email</span>
      </HeaderWrapper>
    </Header>
    <TradeLayout />
    <Footer>
      <FooterWrapper>footer</FooterWrapper>
    </Footer>
  </Container>
);

export default enhance(Trade);
