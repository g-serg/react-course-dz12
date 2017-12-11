import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 80px);
  margin-bottom: -100px;

  &: :after {
    content: '';
    display: block;
    height: 100px;
  }
`;

export const Container = styled.div`
  width: 1200px;
  padding-top: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftOffset = styled.div`
  width: 300px;
`;

export const GraphPanel = styled.div`
  width: 750px;
`;
