const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const connection = await  mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${connection.connection.host}`.blue.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
}

module.exports = connectDB;