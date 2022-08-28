const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  poster: {
    type: String,
  },
  year: {
    type: Number,
  },
  id: {
    type: String,
  },
});

const userData = mongoose.model("userData", userDataSchema);

module.exports = {
  userData,
};
