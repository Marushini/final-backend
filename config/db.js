// config/db.js
const mongoose = require('mongoose');

// Database Connection Function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Database Connection Failed: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;