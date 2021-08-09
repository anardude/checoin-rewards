import React from 'react';
import './result-block.style.css';

import { ResultField } from '../result-field/result-field.component';

export const ResultBlock = props => {
  return (
    <div className='result-block-container row '>
      <br />
      <div className='col-xs-10 col-sm-6 col-md-8 col-lg-10'>
        <div className='right'>Estimated rewards per day :</div>
        <br />
        <div className='right'>Estimated percentage per day :</div>
        <br />
        <div className='right'>Estimated rewards per month :</div>
        <br />
        <div className='right'>Estimated percentage per month :</div>
        <br />
        <div className='right'>Estimated rewards per year :</div>
        <br />
        <div className='right'>Estimated percentage per year :</div>
      </div>
      <div className='col-xs-2 col-sm-6 col-md-4 col-lg-2'>
        <div className='right'>
          <ResultField
            resultName='rewards-value-day'
            resultContent={
              props.resultContent > 0 &&
              '$' +
                (Math.round(props.resultContent * 100) / 100).toLocaleString()
            }
          />
        </div>
        <br />
        <div className='right'>
          <ResultField
            resultName='rewards-percentage-day'
            resultContent={
              props.percentage > 0 &&
              Math.round(props.percentage * 100) / 100 + ' %'
            }
          />
        </div>
        <br />
        <div className='right'>
          <ResultField
            resultName='rewards-value-month'
            resultContent={
              props.resultContent > 0 &&
              '$' +
                Math.round((props.resultContent * 365) / 12).toLocaleString()
            }
          />
        </div>
        <br />
        <div className='right'>
          <ResultField
            resultName='rewards-percentage-month'
            resultContent={
              props.percentage > 0 &&
              Math.round((props.percentage * 365) / 12) + ' %'
            }
          />
        </div>
        <br />
        <div className='right'>
          <ResultField
            resultName='rewards-value-year'
            resultContent={
              props.resultContent > 0 &&
              '$' +
                (
                  Math.round(props.resultContent * 365 * 100) / 100
                ).toLocaleString()
            }
          />
        </div>
        <br />
        <div className='right'>
          <ResultField
            resultName='rewards-percentage-year'
            resultContent={
              props.percentage > 0 &&
              Math.round(props.percentage * 365).toLocaleString() + ' %'
            }
          />
        </div>
      </div>
    </div>
  );
};
