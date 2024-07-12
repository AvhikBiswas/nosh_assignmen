import express from "express";
import DBconnect from "./Config/db";

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("i'm alive");
});

app.listen(PORT, async () => {
  await DBconnect();
  console.log("server running on ", PORT);
});
