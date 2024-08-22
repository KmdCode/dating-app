const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const authRouter = require('./routes/authRouter')

dotenv.config({path: './config/config.env'})
const app = express()

app.use(express.json())
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser:true,
}).then(con=>{
    //console.log(con.connections)
    console.log('DB connection successful')
})

app.get('/', (req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'connection successful'
    })
})

app.use('/api/v1/users', authRouter)

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
