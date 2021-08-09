import React from 'react';

import './bottom-block.style.css';

import OfficialWebsite from '../../official-website.png';
import TelegramChe from '../../telegram-che.png';
import TwitterChe from '../../twitter-che.png';

export const BottomBlock = () => (
  <div className='bottom-block'>
    <br />
    <br />
    <div className='row'>
      <div className='col'>
        <a
          href='https://launch.checoin.finance'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='img-bottom'
            src={OfficialWebsite}
            alt='Checoin website'
          />
        </a>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <a href='https://t.me/checointoken' target='_blank' rel='noreferrer'>
          <img
            className='img-bottom'
            src={TelegramChe}
            alt='CheCoin Telegram'
          />
        </a>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <a
          href='https://twitter.com/CheCoinOfficial'
          target='_blank'
          rel='noreferrer'
        >
          <img className='img-bottom' src={TwitterChe} alt='CheCoin Twitter' />
        </a>
      </div>
    </div>
  </div>
);
