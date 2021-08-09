import React from 'react';
import './entry-block.style.css';

import { InputBox } from '../input-box/input-box.component';
import { Button } from '../button/button.component';

export const EntryBlock = props => (
  <div className='entry-block-container'>
    <h2 className='left'>Number of $CheCoins :</h2>
    <div className='row around-xs'>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='10000'
            handleClick={props.handleClickButtonNumber}
            text='+ 10K'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='100000'
            handleClick={props.handleClickButtonNumber}
            text='+ 100K'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='1000000'
            handleClick={props.handleClickButtonNumber}
            text='+ 1M'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='10000000'
            handleClick={props.handleClickButtonNumber}
            text='+ 10M'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='100000000'
            handleClick={props.handleClickButtonNumber}
            text='+ 100M'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button handleClick={props.handleClickButtonNumber} text='Reset' />
        </div>
      </div>
    </div>
    <InputBox
      boxType='number'
      boxName='coinsNumber'
      placeholder='Enter how many $CheCoins you have'
      handleChange={props.handleChangeCoinsNumber}
      value={props.coinsNumber !== 0 ? props.coinsNumber : ''}
    />
    <div className='left'>
      Wallet value in USD dollars :
      {props.coinsNumber &&
        '$' +
          (
            Math.round(props.coinPriceUSD * props.coinsNumber * 100) / 100
          ).toLocaleString()}
    </div>
    <br></br>
    <h2 className='left'>Transactions volume by day:</h2>
    <div className='row around-xs'>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='10000'
            handleClick={props.handleClickButtonVolume}
            text='+ 10K'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='100000'
            handleClick={props.handleClickButtonVolume}
            text='+ 100K'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='1000000'
            handleClick={props.handleClickButtonVolume}
            text='+ 1M'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='10000000'
            handleClick={props.handleClickButtonVolume}
            text='+ 10M'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button
            value='100000000'
            handleClick={props.handleClickButtonVolume}
            text='+ 100M'
          />
        </div>
      </div>
      <div className='col-xs-5 col-sm-4 col-md-4 col-lg-2'>
        <div className='box-first'>
          <Button handleClick={props.handleClickButtonVolume} text='Reset' />
        </div>
      </div>
    </div>
    <InputBox
      boxType='number'
      boxName='transactionsVolume'
      placeholder='Enter the 24h transactions volume'
      handleChange={props.handleChangeTransactionsVolume}
      value={props.transactionsVolume !== 0 ? props.transactionsVolume : ''}
    />
  </div>
);
