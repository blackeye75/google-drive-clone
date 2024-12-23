const express = require('express');
const userRouter = require('./routes/user.routes');
const dotev = require('dotenv');
dotev.config();
const connectDB = require('./config/db');
connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});