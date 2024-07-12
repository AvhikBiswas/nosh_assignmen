import express from "express";
import DBconnect from "./Config/db.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/helth", async (req, res) => {
  res.send("i'm alive");
});

app.listen(PORT, async () => {
  await DBconnect();
  console.log("server running on ", PORT);
});
