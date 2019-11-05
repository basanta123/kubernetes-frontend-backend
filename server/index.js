var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
