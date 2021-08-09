import React from 'react';

import { ResultField } from '../result-field/result-field.component';

export const CompareInvest = props => (
  <div className='compare-invest'>
    <h2 className='left'>
      To compare, with the same amount invested (
      {props.walletUSD > 0 && ' $' + props.walletUSD.toLocaleString()} ) :
    </h2>
    <figure>
      <table>
        <thead>
          <tr>
            <th className='center' scope='col'>
              Other investment option :
            </th>
            <th className='center' scope='col'>
              Average year interests
            </th>
            <th className='center' scope='col'>
              Year rewards
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bank savings</td>
            <td className='right'>0.5%</td>
            <td className='right'>
              <ResultField
                resultName='rewards-value-year'
                resultContent={
                  props.walletUSD > 0 &&
                  '$' + props.calculWalletUSDPercent(0.005)
                }
              />
            </td>
          </tr>
          <tr>
            <td>Real Estate investment</td>
            <td className='right'>5%</td>
            <td className='right'>
              <ResultField
                resultName='rewards-value-year'
                resultContent={
                  props.walletUSD > 0 &&
                  '$' + props.calculWalletUSDPercent(0.05)
                }
              />
            </td>
          </tr>
          <tr>
            <td>Stock Market investment</td>
            <td className='right'>10%</td>
            <td className='right'>
              <ResultField
                resultName='rewards-value-year'
                resultContent={
                  props.walletUSD > 0 && '$' + props.calculWalletUSDPercent(0.1)
                }
              />
            </td>
          </tr>
          <tr>
            <td>Celsius Network</td>
            <td className='right'>20%</td>
            <td className='right'>
              <ResultField
                resultName='rewards-value-year'
                resultContent={
                  props.walletUSD > 0 && '$' + props.calculWalletUSDPercent(0.2)
                }
              />
            </td>
          </tr>
          <tr>
            <td>$CheCoin</td>
            <td className='right'>
              <ResultField
                resultName='rewards-percentage-year'
                resultContent={
                  props.percentage > 0 &&
                  Math.round(props.percentage * 365).toLocaleString() + '%'
                }
              />
            </td>
            <td className='right'>
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
            </td>
          </tr>
        </tbody>
      </table>
    </figure>
  </div>
);
