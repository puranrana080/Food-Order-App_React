import AvailableMeals from "./AvailableMeals"
const Meals=(props)=>{
    return (
        props.meals.map((meal)=>{
            return <>
            <AvailableMeals key={meal.id} meal={meal}  />
            </>
        })
    )

}
export default Meals;