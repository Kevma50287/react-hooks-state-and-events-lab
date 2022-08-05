import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState('')

  function handleCart() {
    cart === '' ? setCart('in-cart') : setCart('')
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart === '' ? "add" : "remove"} onClick={handleCart}>{cart=== '' ? 'Add to Cart' : 'Remove from Cart' }</button>
    </li>
  );
}

export default Item;
