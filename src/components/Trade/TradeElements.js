import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2c2e;
  height: 80px;
  color: #fff;
`;

export const HeaderWrapper = styled.div`
  width: 1200px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f2022;
  height: 100px;
`;

export const FooterWrapper = styled.div`
  width: 1200px;
`;
