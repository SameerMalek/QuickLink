const mongoose = require("mongoose");
async function connectMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.error(`Connection error ${err}`));
}
module.exports = {
    connectMongoDB,
};
