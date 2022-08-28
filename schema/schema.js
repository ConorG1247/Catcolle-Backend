const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  username: String,
});

const fullUserData = new mongoose.Schema({
  username: String,
  theme: String,
});

const userData = mongoose.model("fullUserData", fullUserData);

module.exports = {
  userData,
};
