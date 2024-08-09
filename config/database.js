const mongoose = require("mongoose")

const ConnectDataBase = () =>{
    mongoose.set("strictQuery", false);
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected DataBase")
    })
    .catch((err)=>{console.log(err.message)})
}
module.exports = ConnectDataBase

