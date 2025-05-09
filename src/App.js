import {useState} from "react"
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"
import CartProvider from "./store/CartProvider";

function App() {
const [isCartClicked,setCartClicked]=useState(false)

function cartClickedHandler(){
  console.log("ok pop")
  setCartClicked(true)
  
}
function cartCloseClickHandler(){
  setCartClicked(false)
}


  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <CartProvider>
      { isCartClicked && <Cart  cartCloseClick={cartCloseClickHandler} />}
      <Header cartClicked={cartClickedHandler}/>
      <Meals meals={DUMMY_MEALS}></Meals>
    </CartProvider>
  );
}

export default App;
