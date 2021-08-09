import React from 'react';

export const PriceChecoin = ({ marketCap, coinPriceUSD }) => (
  <div className='price-checoin'>
    <div className='row between-xs'>
      <div className='left'>
        $CheCoin MarketCap : $ {marketCap.toLocaleString()}
      </div>
      <div className='right'>$CheCoin USD price : $ {coinPriceUSD}</div>
    </div>
  </div>
);
