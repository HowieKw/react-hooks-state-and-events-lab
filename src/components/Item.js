import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart,setCart] = useState(true);

  const appClass = isInCart ? "" : "in-cart"
  const buttonClass = isInCart ? "add" : "remove"

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={() => setCart(!isInCart)}>
        { isInCart ? 'Add to Cart' : 'Remove From Cart'}
        </button>
    </li>
  );
}

export default Item;
