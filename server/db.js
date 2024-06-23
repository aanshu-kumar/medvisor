const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_DB_URI;

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected");
};

module.exports = connectToMongo;
