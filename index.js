const express = require('express')
const dbConnect = require('./Config/db.config')
const { Posts } = require('./Models/posts.model')
require('dotenv').config()
const PORT=process.env.PORT || 8080
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => res.send('hello'))
app.get('/posts', async(req,res)=>{
    let p=await Posts.find({})
    res.send(p)
})
app.post('/posts', async(req,res)=>{
    try{
    let newPost=await Posts.create(req.body)
    res.send(newPost)
    }catch(e){
        res.send(e.message)
    }
})

app.listen(PORT, () => {
    dbConnect()
    console.log('server started on port 8080')})