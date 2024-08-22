const User = require('./../models/userModel')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const otpGenerator = require('otp-generator')

dotenv.config({path: './../config/config.env'})

exports.signUp = async (req, res) =>{
    const {email, password, confirmPassword} = req.body

    if(password !== confirmPassword){
        return(
            res.status(400).json({
                status: 'fail',
                message: 'Passwords do not match'
            })
        )
    }
    try{
        let user = await User.findOne({email})
        if(user){
            return(
                res.status(400).json({
                    status: 'fail',
                    message: 'User already exists'
                })
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            digits: true,
            lowerCaseAlphabets: false,
        })  

        console.log(otp)

        user = new User({
            email,
            password: hashedPassword,
            otp: otp,
            expiresAt: Date.now()+10*60*1000 //10 minutes

        })
    
        await user.save()
    
        const sender = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            }
        })
    
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: user.email,
            subject: 'Unimate OTP',
            text: `Your OTP is ${otp}, this OTP expires in 10 minutes`
        }
    
        sender.sendMail(mailOptions)

        res.status(200).json({
            status:'success',
            message: `An OTP has been sent to ${user.email}, please verify your email with the provided OTP`
        })  

    }catch(err){
        console.log(err.message)
    }    
}

exports.verifyOtp = async (req, res) =>{
    const {email, otp} = req.body
    
    try{
        const user = await User.findOne({email})
        if(!user){
            return(
                res.status(400).json({
                status: 'Fail',
                message: 'User not found'
            })
            )
        }
        console.log(`system otp ${user.otp}`)

        if(user.otp !== otp){

            console.log(`user otp ${otp}: system otp ${user.otp}`)
            return(
                res.status(400).json({
                    status: 'Fail',
                    message: 'Invalid or Expired OTP'
                })
            )
        }

        user.otp = null;
        user.expiresAt = null;
        user.isVerified = true;
        await user.save()

        res.status(200).json({
            status: 'success',
            message: 'Email verified, please create your profile'
        })

    }catch(err){
        console.log(err.message)

        res.status(500).json({
            status:'fail',
            message: 'Server Error'
        })
    }
}

exports.createProfile = async (req, res) =>{
    const {email, name, age, residence, course, level, interests, goals, role} = req.body

    try{
        let user = await User.findOne({email})

        if(!user){
            return(
                res.status(404).json({
                    status:'fail',
                    message:'user not found'
                })
            )
        }
    
        if(!user.isVerified){
            return(
                res.status(400).json({
                    status:'fail',
                    message:'Email not verified, please verify your email'
                })
            )
        }
        
        user.name = name
        user.age = age
        user.residence = residence
        user.courseOfStudy = course
        user.levelOfStudy = level
        user.interests = interests
        user.relationshipGoals = goals
        user.role = role
        user.profileCompleted = true

        await user.save()
        
        res.status(200).json({
            status:'success',
            message: 'profile created '
        })

    }catch(err){
        return(
            res.status(500).json({
                status:'fail',
                message:'Server error'
            })
        )
    }
}