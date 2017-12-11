import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import * as TGE from './TradeGraphElements';
import {LineChart} from 'react-chartkick';
import {getSell, getPurchase, getMin, getMax, getIsLoading} from '../../reducers/currency';
import {connect} from 'react-redux';
import Offsets from '../Offsets';
import Spinner from 'react-svg-spinner';

const enhance = compose(
  withRouter,
  connect(store => ({
    sell: getSell(store),
    purchase: getPurchase(store),
    min: getMin(store),
    max: getMax(store),
    isLoading: getIsLoading(store),
  })),
  pure,
);

export const TradeGraph = props => {
  const {sell, purchase, min, max, isLoading} = props;

  return (
    <TGE.Main>
      <TGE.Container>
        <TGE.Wrapper>
          <TGE.LeftOffset />
          <TGE.GraphPanel>
            <h2>Окно графика</h2>
            <Offsets />
            <div style={{width: 750, textAlign: 'center'}}>
              {isLoading ? (
                <Spinner gap={5} />
              ) : (
                <LineChart
                  data={[{name: 'Продажа', data: sell}, {name: 'Покупка', data: purchase}]}
                  min={min}
                  max={max}
                  width={750}
                  height={400}
                />
              )}
            </div>
          </TGE.GraphPanel>
        </TGE.Wrapper>
      </TGE.Container>
    </TGE.Main>
  );
};

export default enhance(TradeGraph);
