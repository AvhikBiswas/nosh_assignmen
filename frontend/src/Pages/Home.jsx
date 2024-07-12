import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import FoodCard from "../Components/FoodCard";
import axios from "axios";

export const Home = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const getDishes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/dish");
        setDishes(response.data.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    getDishes();
  }, []);

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="container mx-auto p-4 pt-16">
        <div className="flex flex-wrap justify-center mt-10">
          {dishes &&
            dishes.map((dish) => (
              <FoodCard
                key={dish.id}
                imageUrl={dish.imageUrl}
                foodName={dish.dishName}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
