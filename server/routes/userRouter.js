const express = require('express')
const {createProfile, userProfileInfo, deleteUserProfile} = require('./../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/create-profile').post(createProfile)
router.route('/profile').get(protect, userProfileInfo)
router.route('/delete-profile').delete(protect, deleteUserProfile)

module.exports = router