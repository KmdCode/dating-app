const User = require('./../models/userModel')

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
    const userId = req.user.id; // Get user ID from the authenticated request

    const user = await User.findByIdAndDelete(userId); // Find and delete the user

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    res.status(204).json({ // Status 204 means No Content
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

