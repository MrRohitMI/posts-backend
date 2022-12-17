const {Schema,model} = require("mongoose")

const PostsSchema= new Schema({
    company: {type: String, required: true},
    postedAt: {type: Date, required: true, default: new Date()},
    city: {type: String, required: true},
    location: {type: String, required: true},
    role: {type: String, enum:["FrontEnd","BackEnd","FullStack"], required: true},
    level: {type: String, enum:["Junior","Senior"], required: true},
    contract: {type: String, enum:["Full Time","Part Time"], required: true},
    position: {type: String, enum:["Backend Developer", "Junior Frontend Developer", "Junior Backend Developer", "FSD"], required: true},
    language: {type: String, enum:["JavaScript","Java","C","C++"], required: true}
})
const Posts= model("post",PostsSchema)

module.exports = {Posts}