const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\d{8,10}@swave\.smu\.ac\.za$/, 'Please use your SMU provided email address'],
    },
    password:{
        type: String,
        required: true,
    },
    profileCompleted:{
        type: Boolean,
        default: false
    },
    otp:{
        type: Number,
        
    },
    expiresAt: {
        type: Date,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    name:{
        type: String,
        //required: [true, 'User name is required']
    },
    age:{
        type: Number,
        //required: [true, 'Age is required']
    },
    residence:{
        type: String,
        //required: [true, 'Student residence is required']
    },
    courseOfStudy:{
        type: String,
        //require: [true, 'Course of study is required']
    },
    levelOfStudy:{
        type: String,
        //required: [true, 'Level of study is required']
    },
    interests:{
        type: String
    },
    relationshipGoals:{
        type: String,
        //required: [true, 'Relationship goal required']
    },
    bio: {
        type: String
    },
    role:{
        type: String
        },
    profilePicture: {
        data: Buffer,
        contentType: String,
      },
    hasCreatedDate: {
        type: Boolean,
        default: false // Tracks if an advertiser has created a date
    }
      
})

const User = mongoose.model('User', userSchema)
module.exports = User;