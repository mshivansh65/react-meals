import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes["header-test"]}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-img"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/raw/11-practice-food-order-app/extra-files/meals.jpg"
          alt="table full with delisious food "
        />
      </div>
    </Fragment>
  );
};
export default Header;
