const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['inprogress', 'interview scheduled', 'accepted', 'rejected'],
    default: 'inprogress'
  }
});

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
  applicants: [applicantSchema] // Store applicant's ID and status in an embedded schema
});

const Date = mongoose.model('Date', dateSchema);

module.exports = Date;
