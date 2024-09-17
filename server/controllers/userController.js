const mongoose = require('mongoose');
const User = require('./../models/userModel')
const Date = require('./../models/DateModel')
const asyncHandler = require('express-async-handler');

exports.createProfile = async (req, res) =>{
    const {email, name, age, residence, course, level, interests, goals, role, bio} = req.body

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

        let profilePicture = null;
        if (req.file) {
          profilePicture = {
            data: req.file.buffer, // Store the buffer from multer
            contentType: req.file.mimetype, // Store the file MIME type
          };
        }
        
        user.name = name
        user.age = age
        user.residence = residence
        user.courseOfStudy = course
        user.levelOfStudy = level
        user.interests = interests
        user.relationshipGoals = goals
        user.role = role
        user.bio = bio
        user.profilePicture = profilePicture
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


exports.userProfileInfo = async (req, res) => {
  try {

    const userId = req.user.id

    const user = await User.findById(userId).select('-password')

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      })
    }

    //console.log(user.name)
    if (user.profilePicture && user.profilePicture.data) {
      user.profilePicture = {
        data: user.profilePicture.data.toString('base64'), // Convert Buffer to Base64 string
        contentType: user.profilePicture.contentType,
      };
    }

    res.status(200).json({
      status: 'success',
      data: {
        user
      },
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 'fail',
      message: 'Server Error',
    })
  }
};


exports.deleteUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; 

    const user = await User.findByIdAndDelete(userId); 

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    res.status(204).json({ 
      status: 'success',
      message: 'User profile deleted successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: 'Server Error',
    });
  }
};

exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    user.residence = req.body.residence || user.residence;
    user.bio = req.body.bio || user.bio;
    user.courseOfStudy = req.body.courseOfStudy || user.courseOfStudy;
    user.levelOfStudy = req.body.levelOfStudy || user.levelOfStudy;
    user.interests = req.body.interests || user.interests;
    user.relationshipGoals = req.body.relationshipGoals || user.relationshipGoals;
    //user.profilePicture = req.body.profilePicture || user.profilePicture;

    const updatedUser = await user.save();

    res.json({
      id: updatedUser._id,
      name: updatedUser.name,
      age: updatedUser.age,
      residence: updatedUser.residence,
      courseOfStudy: updatedUser.courseOfStudy,
      levelOfStudy: updatedUser.levelOfStudy,
      interests: updatedUser.interests,
      relationshipGoals: updatedUser.relationshipGoals,
      profilePicture: updatedUser.profilePicture,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
}); 

exports.createDate = async (req, res) => {

  try{

    const {title, description, age, residence, courses, level, interests, goal} = req.body
    const newDate = new Date({
      title,
      description,
      age,
      residence,
      courses,
      level,
      interests,
      goal,
      createdBy: req.user._id,
      hasCreatedDate:true
    })

    await newDate.save()

    res.status(201).json({
      status: 'success',
      message: 'Date created successfully',
      date:newDate
    })


  }catch(err){
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message:'Failed to create date'
    })
  }

}

exports.dateInfo = async (req, res) => {
  try {
    // Assuming `applicants` is an array of objects with a `user` field that references the User model
    const date = await Date.findOne({ createdBy: req.user.id })
      .populate({
        path: 'applicants.user',  // Populate the 'user' field inside the applicants array
        select: 'name email interests age relationshipGoals courseOfStudy residence bio' // Select the fields to include
      });

    if (!date) {
      return res.status(404).json({ status: 'fail', message: 'No date found for the user.' });
    }

    res.status(200).json({
      status: 'success',
      data: {
        date,
      },
    });
  } catch (error) {
    console.error('Error fetching date info:', error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
}

exports.getAllDates = async (req, res) => {
  try {
    const dates = await Date.find(); 
    res.status(200).json({
      status: 'success',
      data: {
        dates,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch dates',
    });
  }
};

exports.getDateById = async (req, res) => {
  try {
    const date = await Date.findById(req.params.id);
    if (!date) {
      return res.status(404).json({
        status: 'fail',
        message: 'Date not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        date,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Server Error',
    });
  }
};

exports.applyForDate = async (req, res) => {
  try {

    
    const dateId = req.params
    const userId = req.user.id;  
    const objectId = new mongoose.Types.ObjectId(dateId);

    console.log('dateId:', objectId); // Check if dateId is correct
    console.log('userId:', userId); // Check if userId is correct

    // Find the date by dateId
    const date = await Date.findById(objectId);
    if (!date) {
      return res.status(404).json({
        status: 'fail',
        message: 'Date not found',
      });
    }

    // Check if the user has already applied
    const alreadyApplied = date.applicants.some(applicant => applicant.user.toString() === userId);
    if (alreadyApplied) {
      return res.status(400).json({
        status: 'fail',
        message: 'You have already applied for this date',
      });
    }

    // Add the user and default status to the applicants array
    date.applicants.push({ user: userId, status: 'inprogress' });

    // Save the updated date document
    await date.save();

    res.status(200).json({
      status: 'success',
      message: 'Application successful!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: 'Server Error',
    });
  }
};

exports.viewAppliedDates = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming the user is authenticated and we have their ID

    // Find dates where the applicant's ID exists in the applicants array
    const appliedDates = await Date.find({ 'applicants.user': userId }).populate('createdBy', 'name');

    if (!appliedDates || appliedDates.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'No applied dates found',
      });
    }

    // Filter through the applied dates to extract the applicant's status for each date
    const datesWithStatus = appliedDates.map(date => {
      const applicantInfo = date.applicants.find(applicant => String(applicant.user) === String(userId));
      return {
        dateId: date._id,
        title: date.title,
        description: date.description,
        status: applicantInfo ? applicantInfo.status : 'unknown', // Include the status field for each applicant
        createdBy: date.createdBy.name, // Date creator's name
      };
    });

    res.status(200).json({
      status: 'success',
      data: datesWithStatus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: 'Server Error',
    });
  }
};
