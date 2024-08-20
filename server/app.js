const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})
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


app.get('/', (req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'connection successful'
    })
})

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
