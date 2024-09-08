const User = require('./../models/userModel')
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
        
        user.name = name
        user.age = age
        user.residence = residence
        user.courseOfStudy = course
        user.levelOfStudy = level
        user.interests = interests
        user.relationshipGoals = goals
        user.role = role
        user.bio = bio
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

    console.log(user.name)

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
