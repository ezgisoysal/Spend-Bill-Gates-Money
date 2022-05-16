import React from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

function Money() {
  const money = useSelector((state) => state.products.money);

  return (
    <div className="money">
      <NumberFormat value={money} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
    </div>
  )
}

export default Money;