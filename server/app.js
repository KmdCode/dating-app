const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express()
app.use(express.json())


dotenv.config({path: './config/config.env'})

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser:true,
}).then(con=>{
    //console.log(con.connections)
    console.log('DB connection successfull')
})


const port = 8000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
