const express = require('express');
const userRouter = require('./routes/todo');
const { mongodbConnection } = require('./connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/todo', userRouter);

mongodbConnection().then(() => {
  console.log('MongoDB connected');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});