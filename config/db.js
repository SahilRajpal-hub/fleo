const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/fleo";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo Db connected to ${conn.connection.port}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDb };
