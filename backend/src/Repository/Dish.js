import DishModel from "../Model/dish.js";

class Dish {
  static instance;

  constructor() {
    if (Dish.instance) {
      return Dish.instance;
    }
    Dish.instance = this;
  }

  async insertBulk(dishes) {
    try {
      const result = await DishModel.insertMany(dishes);
      return result;
    } catch (error) {
      throw new Error("Error inserting dishes: " + error.message);
    }
  }

  async findPublishedDishes() {
    try {
      const result = await DishModel.find({ isPublished: true });
      return result;
    } catch (error) {
      throw new Error("Error fetching published dishes: " + error.message);
    }
  }

  async findAllDishes() {
    try {
      const result = await DishModel.find();
      return result;
    } catch (error) {
      throw new Error("Error fetching all dishes: " + error.message);
    }
  }

  async togglePublish(dish) {
    try {
      dish.isPublished = !dish.isPublished;
      const updatedDish = await dish.save();
      return updatedDish;
    } catch (error) {
      throw new Error("Error toggling publish status: " + error.message);
    }
  }

  async findDish(dishId) {
    try {
      const dish = await DishModel.findOne({ $where: (dishId = dishId) });
      if (!dish) {
        throw new Error("Dish not found");
      }
      return dish;
    } catch (error) {
      throw new Error("Error fetching dish: " + error.message);
    }
  }
}

// Export a singleton instance of the Dish class
const dishInstance = new Dish();
export default dishInstance;
