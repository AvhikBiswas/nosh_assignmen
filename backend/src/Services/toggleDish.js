import dishInstance from "../Repository/Dish.js";

const toggleDish = async (dishId) => {
  try {
    const res = await dishInstance.findDish(dishId);
    if (res) {
      const data = dishInstance.togglePublish(dishId);
      return data;
    } else {
      throw new Error("Somthing went Wrong");
    }
  } catch (error) {
    throw new Error("Somthing went Wrong" + error);
  }
};

export default toggleDish;
