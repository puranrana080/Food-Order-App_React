import classes from "./AvailableMeals.module.css";
const AvailableMeals = (props) => {
  return (
    <div className={classes.mainMeal}>
      <div>{props.meal.name}</div>
      <div>{props.meal.speciality}</div>
      <div>${props.meal.price}</div>
      <hr></hr>
    </div>
  );
};
export default AvailableMeals;
