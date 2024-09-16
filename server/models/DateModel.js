const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema({
    title: {
         type: String, 
         required: true 
        },
    age: { 
        type: String, 
        required: true 
    },
    residence: { 
        type: [String], 
        required: true 
    },
    courses: { 
        type: [String], 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    level: { 
        type: String, 
        required: true 
    },
    interests: { 
        type: String 
    },
    goal: { 
        type: String, 
        required: true 
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, // Reference to the advertiser
        ref: 'User', 
        required: true 
    }, 
    hasCreatedDate: {
        type: Boolean,
        default: false // Tracks if an advertiser has created a date
    },
    applicants: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            default: [] 
        }
    ]

});

const Date = mongoose.model('Date', dateSchema);

module.exports = Date;
