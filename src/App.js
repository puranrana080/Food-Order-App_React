import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals"

function App() {
  const DUMMY_MEALS=[{
    id:"1",
    name:"Sushi",
    speciality:"Finesh Fish and veggies",
    price:"22.99"
  },{
    id:"2",
    name:"Schnitzel",
    speciality:"A german speciality",
    price:"16.50"
  },{
    id:"3",
    name:"Barbeque Burger",
    speciality:"American, raw meaty",
    price:"12.99"
  }]

  return (
    <>
      <Header />
      <MealsSummary/>
      <Meals meals={DUMMY_MEALS}></Meals>
     
    </>
  );
}

export default App;
