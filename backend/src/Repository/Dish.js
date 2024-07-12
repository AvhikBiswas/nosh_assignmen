import DishModel from "../Model/dish";

class Dish {
  static async insertBulk(dishes) {
    try {
      const result = await DishModel.insertMany(dishes);
      return result;
    } catch (error) {
      throw new Error("Error inserting dishes: " + error.message);
    }
  }
  static async findPublishedDishes() {
    try {
      const result = await DishModel.find({
        $where: (isPublished = true),
      });
      return result;
    } catch (error) {
      throw new Error("Error in featching public dishes: " + error.message);
    }
  }

  static async findAllDishes() {
    try {
      const result = await DishModel.find();
      return result;
    } catch (error) {
      throw new Error("Error in featching all dishes: " + error.message);
    }
  }

  static async togglePublish(dishId) {
    try {
      const dish = await DishModel.findById(dishId);
      if (!dish) {
        throw new Error("Dish not found");
      }
      dish.isPublished = !dish.isPublished;
      const updatedDish = await dish.save();
      return updatedDish;
    } catch (error) {
      throw new Error("Error toggling publish status: " + error.message);
    }
  }

  static async togglePublish(dishId) {
    try {
      const dish = await DishModel.findById(dishId);
      if (!dish) {
        throw new Error("Dish not found");
      }
      dish.isPublished = !dish.isPublished;
      const updatedDish = await dish.save();
      return updatedDish;
    } catch (error) {
      throw new Error("Error toggling publish status: " + error.message);
    }
  }
}
