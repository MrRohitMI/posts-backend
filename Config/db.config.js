const mongoose = require('mongoose');
require('dotenv').config()
const PASS=process.env.PASS
const dbConnect = ()=>{
    mongoose.connect(`mongodb+srv://r:${PASS}@cluster0.ogjbmbu.mongodb.net/?retryWrites=true&w=majority`)
}

module.exports=dbConnect