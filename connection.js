const mongoose = require('mongoose');
require('dotenv').config();

async function mongodbConnection() {
  return mongoose.connect(process.env.MONGODB_URI);
}

module.exports = { mongodbConnection };