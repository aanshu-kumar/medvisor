const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/auth");
const connectToMongo = require("./db");
require("dotenv").config();

connectToMongo();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
