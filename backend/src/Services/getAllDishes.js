import dishInstance from "../Repository/Dish";

const getAllPublishedDishes = async () => {
  try {
    const data = await dishInstance.findPublishedDishes();
    return data;
  } catch (error) {
    return error;
  }
};



