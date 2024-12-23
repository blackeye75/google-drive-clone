const mongoose = require('mongoose');

// const connection=mongoose.connect('mongodb://0.0.0.0/drive').then(() => {
//     console.log("Connected to datebase");
// })

function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => { console.log("connected to database") }).catch((err) => {
        console.log(err);
    })
}
module.exports = connectDB;