const mongoose = require("mongoose");
//Set up default mongoose connection

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connection has build");
  } catch (error) {
    console.log(error)
  }
};

module.exports = { connect };
