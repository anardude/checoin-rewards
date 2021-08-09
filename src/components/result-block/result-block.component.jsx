import React from 'react';
import './result-block.style.css';

import { ResultField } from '../result-field/result-field.component';

export const ResultBlock = props => {
  return (
    <div className='result-block-container row '>
      <div className='col-xs-10 col-sm-6 col-md-8 col-lg-10'>
        <div className='right'>Estimated rewards by day :</div>
        <div className='right'>Estimated percentage by day :</div>
        <div className='right'>Estimated rewards by month :</div>
        <div className='right'>Estimated percentage by month :</div>
        <div className='right'>Estimated rewards by year :</div>
        <div className='right'>Estimated percentage by year :</div>
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
        <div className='right'>
          <ResultField
            resultName='rewards-percentage-day'
            resultContent={
              props.percentage > 0 &&
              Math.round(props.percentage * 100) / 100 + ' %'
            }
          />
        </div>
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
        <div className='right'>
          <ResultField
            resultName='rewards-percentage-month'
            resultContent={
              props.percentage > 0 &&
              Math.round((props.percentage * 365) / 12) + ' %'
            }
          />
        </div>
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
