import express from "express";
import toggleDishes from "../../Controller/toggleDishes.js";
import allDishes from "../../Controller/allDishes.js";

const router = express.Router();

router.patch("/status/:dishId", toggleDishes);
router.get("/dish", allDishes);

export default router;
