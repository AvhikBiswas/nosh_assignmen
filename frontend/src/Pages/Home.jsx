import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
import FoodCard from "../Components/FoodCard";
import axios from "axios";

const Home = () => {
  const [dishes, setDishes] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:8000/");

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

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

  useEffect(() => {
    const socketInit = async () => {
      if (!socketRef.current) return;

      socketRef.current.on("publishChange", (data) => {
        const dishData = data?.data;

        setDishes((prevDishes) => {
          // Check if the dish already exists in the array
          const existingIndex = prevDishes.findIndex(
            (dish) => dish._id === dishData._id
          );

          if (dishData.isPublished) {
            // If it doesn't exist, add it to the array
            if (existingIndex === -1) {
              return [...prevDishes, dishData];
            } else {
              // If it exists, update the existing dish
              const updatedDishes = [...prevDishes];
              updatedDishes[existingIndex] = dishData;
              return updatedDishes;
            }
          } else {
            // Remove the dish if it exists and is unpublished
            if (existingIndex !== -1) {
              const filteredDishes = prevDishes.filter(
                (dish) => dish._id !== dishData._id
              );
              return filteredDishes;
            } else {
              return prevDishes;
            }
          }
        });

        if (dishData.isPublished) {
          toast.success(
            `${dishData.dishName} is Added!`,
            { id: "1" }
          );
        } else {
          toast.error(
            `${dishData.dishName} is Removed!`,
            { id: "1" }
          );
        }
      });
    };

    socketInit();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [socketRef]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 pt-20">
        <div className="flex flex-wrap justify-center">
          {dishes &&
            dishes.map((dish) => (
              <FoodCard
                key={dish._id}
                imageUrl={dish.imageUrl}
                foodName={dish.dishName}
                isPublished={dish.isPublished}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
