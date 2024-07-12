import toggleDish from "../Services/toggleDish.js";

const toggleDishes = async (req, res) => {
  const { dishId } = req.params;
  try {
    const data = await toggleDish(dishId);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable To Toggle",
      error: error.message,
    });
  }
};

export default toggleDishes;
