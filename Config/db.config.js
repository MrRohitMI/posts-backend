const mongoose = require('mongoose');
const dbConnect = ()=>{
    mongoose.connect("mongodb+srv://r:wNZW7YYApPpkALkz@cluster0.ogjbmbu.mongodb.net/?retryWrites=true&w=majority")
}

module.exports=dbConnect