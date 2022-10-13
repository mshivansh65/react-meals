import { useRef, useState } from "react";
import Classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      props.onAddToCart(enteredAmountNumber);
    }
  }
  return (
    <form className={Classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{
          id: 1,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          default: "1"
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter A Valid Amount</p>}
    </form>
  );
}
