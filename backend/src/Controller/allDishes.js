import getAllPublishedDishes from "../Services/getAllPublishedDishes.js";

const allDishes = async (req, res) => {
  try {
    const data = await getAllPublishedDishes();
    res.status(200).json({ success: false, data, error: {} });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching published dishes",
      error: { error },
    });
  }
};

export default allDishes;
