import express from "express";
import DBconnect from "./Config/db.js";
import "dotenv/config";
import bulkInsert from "./Services/bulkInsert.js";

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/",async (req, res) => {
  res.send("i'm alive");
});

app.listen(PORT, async () => {
  await DBconnect();
  // await bulkInsert();
  console.log("server running on ", PORT);
});
