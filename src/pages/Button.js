import React from 'react';
import { increment, decrement } from '../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Button ({product}) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.products.money);
  
  return (
    <div className="triple">
      <button
        className="sell"
        disabled={product.count > 0 ? false : true}
        onClick={() => dispatch(decrement(product.name))}
      >Sell
      </button>
      <input className="input" value={product.count} />
      <button
        className="buy"
        disabled={product.price > money}
        onClick={() => dispatch(increment(product.name))}
      >Buy
      </button>
    </div>
  )
}

export default Button;