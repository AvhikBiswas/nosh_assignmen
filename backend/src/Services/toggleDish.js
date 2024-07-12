import { io } from "../index.js";
import dishInstance from "../Repository/Dish.js";

const toggleDish = async (dishId) => {
  try {
    const res = await dishInstance.findDish(dishId);

    if (res) {
      const data = await dishInstance.togglePublish(dishId);
      console.log("res", data);
      try {
        await io.emit("publishChange", {
          data,
        });
      } catch (error) {
        console.log("Error in emmitinr", error);
      }

      console.log("data", data);

      return data;
    }
  } catch (error) {
    throw new Error("Somthing went Wrong" + error);
  }
};

export default toggleDish;
