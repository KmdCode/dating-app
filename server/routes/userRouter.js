const express = require('express')
const {createProfile, userProfileInfo, deleteUserProfile, updateUserProfile} = require('./../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/create-profile').post(createProfile)
router.route('/profile').get(protect, userProfileInfo)
router.route('/delete-profile').delete(protect, deleteUserProfile)
router.route('/update-profile').put(protect, updateUserProfile);


module.exports = router