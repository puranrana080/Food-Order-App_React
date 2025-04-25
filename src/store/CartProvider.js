import React, { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
  };
  const removeItemFromCartHandler = (id) => {
    updateItems((preItems) => {
      return preItems.map((item) => {
        if (item.id === id) {
          if (item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "click here",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {console.log("inside", CartContext)}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
