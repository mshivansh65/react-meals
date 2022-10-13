import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import "./Styles.css";
import CartProvider from "../src/Store/cartProvider";
export default function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  function showCartHandler() {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      <div className="App">
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}
