const dotenv = require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGODB_URI,
  secretOrKey: "secret",
};
