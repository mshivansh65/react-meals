import { useContext } from "react";
import Classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItem = (
    <ul className={Classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={Classes.cart}>{cartItem}</div>
      <div className={Classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={Classes.button}>Order Now</button>}
      </div>
    </Modal>
  );
}
