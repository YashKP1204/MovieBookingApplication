const env = require('dotenv')
env.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT

app.get('/',(req,res)=>{
    return res.json({
        success:true,
        message:"Get method called"
    })
})

app.listen(port,async()=>{
    console.log(`backend listening at port ${port}`)

    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Successfully connected to mongo")      
    } catch (error) {
        console.log("error connection the database ",error.message)
    }
})

