import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import Classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
export default function MealItem(props) {
  const cartCtx = useContext(CartContext);
  function cartAddHandler(amount) {
    const itemToBeAdded = {
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount
    };

    cartCtx.addItem(itemToBeAdded);
  }
  let { id, name, description, price } = props.meal;
  price = `$${price.toFixed(2)}`;
  return (
    <li key={id} className={Classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={Classes.description}>{description}</div>
        <div className={Classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={cartAddHandler} />
      </div>
    </li>
  );
}
