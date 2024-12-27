const express = require('express');
const dotev = require('dotenv');
const cookieParser = require('cookie-parser');
dotev.config();
const connectDB = require('./config/db');
const userRouter = require('./routes/user.routes');
const inderRouter= require("./routes/index.routes");
connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/user', userRouter);
app.use('/',inderRouter)

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});