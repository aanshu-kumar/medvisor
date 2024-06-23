const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = process.env.MONGO_DB_URI;

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected");
};

module.exports = connectToMongo;
