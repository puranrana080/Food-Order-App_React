import HeaderCartButton from "./HeaderCartButton";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartClick={props.cartClicked} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="a table with lots of food" />
      </div>
    </>
  );
};
export default Header;
