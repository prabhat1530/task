const mongoose = require('mongoose');
require('dotenv').config();

async function mongodbConnection() {
  return mongoose.connect(process.env.MONGODB_URL);
}

module.exports = { mongodbConnection };