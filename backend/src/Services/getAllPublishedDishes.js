import dishInstance from "../Repository/Dish.js";

const getAllPublishedDishes = async () => {
  try {
    const data = await dishInstance.findPublishedDishes();
    return data;
  } catch (error) {
    return error;
  }
};


export default getAllPublishedDishes;

