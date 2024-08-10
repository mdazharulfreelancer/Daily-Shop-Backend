const mongoose = require("mongoose")

const ConnectDataBase = () =>{
    mongoose.set("strictQuery", false);
    mongoose
    .connect("mongodb+srv://dailyhop:a58mRJfCYSbJfGhG@dailyshop.4rnf6.mongodb.net/dailyshop")
    .then(()=>{
        console.log("connected DataBase")
    })
    .catch((err)=>{console.log(err.message)})
}
module.exports = ConnectDataBase

