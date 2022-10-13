import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import Classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);
  const { items } = cartCtx;
  const [btnIsHighlited, setBtnHiglited] = useState(false);
  const buttonClasses = `${Classes.button} ${
    btnIsHighlited ? Classes.bump : " "
  }`;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnHiglited(true);
    const timer = setTimeout(() => {
      setBtnHiglited(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
