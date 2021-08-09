import React from 'react';

import refresh from '../../refresh.png';

export const PriceChecoin = ({
  marketCap,
  coinPriceUSD,
  handleRefreshButton,
}) => (
  <div className='price-checoin'>
    <div className='row between-xs'>
      <div className='left'>
        $CheCoin MarketCap : $ {marketCap.toLocaleString()}
      </div>
      <div className='center'>
        <a href='#' onClick={handleRefreshButton}>
          <img alt='refresh' src={refresh} />
        </a>
      </div>
      <div className='right'>$CheCoin USD price : $ {coinPriceUSD}</div>
    </div>
  </div>
);
