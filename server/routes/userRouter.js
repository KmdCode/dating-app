const express = require('express')
const {createProfile, userProfileInfo, deleteUserProfile, updateUserProfile} = require('./../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
const upload = require('../middleware/multerConfig')

const router = express.Router()

router.post('/create-profile', upload.single('profilePicture'), createProfile);
router.route('/profile').get(protect, userProfileInfo)
router.route('/delete-profile').delete(protect, deleteUserProfile)
router.route('/update-profile').put(protect, updateUserProfile);


module.exports = router