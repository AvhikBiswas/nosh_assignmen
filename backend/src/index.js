import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("i'm alive");
});

app.listen(PORT, () => {
  console.log("server running on ", PORT);
});
