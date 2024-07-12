import React from "react";

const FoodCard = ({ imageUrl, foodName }) => {
  return (
    <div className="w-64 h-80 rounded-xl cursor-pointer overflow-hidden shadow-lg bg-white mx-4 mb-8 hover:shadow-2xl transition duration-300">
      <img
        className="w-full h-40 object-cover"
        src={imageUrl}
        alt="Food Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg">{foodName}</div>
      </div>
    </div>
  );
};

export default FoodCard;
