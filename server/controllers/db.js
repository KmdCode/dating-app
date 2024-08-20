const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

const DB = process.env.DB.replace('<password>', process.env.DATABASE_PASS)

mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
}).then(con=>{
    console.log(con.connections)
    console.log('DB connection successfull')
})

module.exports = d;