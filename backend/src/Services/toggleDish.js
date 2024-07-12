import dishInstance from "../Repository/Dish";

const toggleDish = async (dishId) => {
  try {
    const res = await dishInstance.findDish(dishId);
    if (res) {
      const data = dishInstance.togglePublish(res.dishId);
      return data;
    }
  } catch (error) {
    return error;
  }
};
