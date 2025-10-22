const mongoose = require("mongoose");

async function connectMongoDb(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB connected ");
    })
    .catch((err) => {
      console.log("Mogno Error", err);
    });
}

module.exports = {
  connectMongoDb,
};
