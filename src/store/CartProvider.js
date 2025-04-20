import React ,{useState} from "react"
import CartContext from "./cart-context";
const CartProvider = (props) => {
const [items,updateItems]=useState([])


  const addItemToCartHandler = (item) => {
    updateItems([...items,item])
 
  };
  const removeItemFromCartHandler = (id) => {};
 


  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    meaage:'click here'
  };
  return (
    <CartContext.Provider value={cartContext}>
        {console.log("inside",CartContext)}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
