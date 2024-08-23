const User = require('./../models/userModel')

exports.createProfile = async (req, res) =>{
    const {email, name, age, residence, course, level, interests, goals, role} = req.body

    try{

    }catch(err){
        res.status(500).json({
            status:'fail',
            message:'Server Error'
        })
    }
}