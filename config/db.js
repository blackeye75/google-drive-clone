const mongoose = require('mongoose');

const connection=mongoose.connect('mongodb://0.0.0.0/drive').then(() => {
    console.log("Connected to datebase");
})

module.exports = connection;