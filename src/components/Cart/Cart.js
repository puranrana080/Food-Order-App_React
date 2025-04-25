import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from ".//CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)
  // const totalQuantity=`$${cartCtx.totalAmount.toFixed(2)}`

  const allCartItems = cartCtx.items.reduce((acc, curr) => {
    const existing = acc.find((item) => item.id === curr.id);
    if (existing) {
      existing.quantity = Number(existing.quantity) + Number(curr.quantity);
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);

  const totalAmount = allCartItems
    .reduce((acc, curr) => {
      acc += curr.price * Number(curr.quantity);
      return acc;
    }, 0)
    .toFixed(2);
  const cartitemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
    
  };
  const cartItemAddHandler = (item) => {};
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {allCartItems.map((item) => (
  
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartitemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
        
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.cartCloseClick}
        >
          {" "}
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
