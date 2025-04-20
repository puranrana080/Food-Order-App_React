import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

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
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {allCartItems.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          Name:{item.name}&nbsp; | &nbsp; Price:{item.price}&nbsp; | &nbsp;
          Quantity:{item.quantity}
        </li>
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
