import React from 'react';
import Masonry from 'react-masonry-css';
import NumberFormat from 'react-number-format';

import { useSelector} from 'react-redux';
import NealFun from './NealFun'
import Header from './Header';
import Money from './Money';
import Button from './Button';
import List from './List';

function Home() {
  const products = useSelector((state) => state.products.items);
  const realProducts = products.filter(product => product.count > 0);

  return (
    <div>
      <NealFun />
      <Header />
      <Money />
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">

        {products.map((product) => (
           <div key={product.id}>
             <img className="image" alt={product.name} src={product.img} />
             <div className="name">{product.name}</div>
             <div className="price">
              <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
             </div>
             <Button product={product}/>
           </div>
        ))}

      </Masonry>
      {realProducts.length > 0 && <List />}
    </div>
  )
}

export default Home;