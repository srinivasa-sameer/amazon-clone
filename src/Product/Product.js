import styles from './Product.module.css';

import React from 'react';

const Product = (props) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{props.title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <small>{props.price}</small>
        </p>
        <div className={styles.product__rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p> ⭐</p>
            ))}
        </div>
      </div>
      <img alt="Product_Image" src={props.image} />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
