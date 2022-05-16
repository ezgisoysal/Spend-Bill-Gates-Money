import React from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

function List() {
  const products = useSelector((state) => state.products.items);
    
  const getTotalPrice = function(products) {
    let totalPrice = 0;
    products.forEach(function(product) {
      totalPrice += product.count * product.price;
    })
    return totalPrice;
  }

  const realProducts = products.filter(product => product.count > 0);
  const totalPrice = getTotalPrice(realProducts);


  return (
    <div className="list">
      <h2 className="list-header">Your Receipt</h2>

      {realProducts.map((product) => (
        <div className="received">
          <div className="list-name">{product.name}</div>
          <div className="list-amount">x{product.count}</div>
          <div className="list-cost">
            <NumberFormat value={product.count * product.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </div>
        </div>
      ))}
      
      <div className="account">
        <span>TOTAL</span>
        <div className="list-total">
          <NumberFormat value={totalPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </div>
      </div>
    </div>
  )
}

export default List;