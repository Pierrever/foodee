import { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";

const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (error) {
    return <Error title="failed to fetch" message="you fail"></Error>;
  }
  if (isLoading) {
    return <p className="center">Fetching meals</p>;
  } else {
    return (
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    );
  }
}
