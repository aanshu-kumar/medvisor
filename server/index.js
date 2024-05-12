const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./routes/user");
const connectToMongo = require("./db");
const userQueryRouter = require("./routes/aibot");
require("dotenv").config();

connectToMongo();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", authRouter);
app.use("/api/aibot", userQueryRouter);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "404 Page not found!",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
