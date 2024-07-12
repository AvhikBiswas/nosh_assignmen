import dishInstance from "../Repository/Dish.js";

const toggleDish = async (dishId) => {
  try {
    // const res = await dishInstance.findDish(dishId);
    // console.log('res', res)
    // if (res) {
    const data = dishInstance.togglePublish(dishId);
    return data;
  } catch (error) {
    return error;
  }
};

export default toggleDish;
