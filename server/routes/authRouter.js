const express = require('express')
const {signUp, verifyOtp, createProfile} = require('../controllers/authController')

const router = express.Router()

router.route('/signup').post(signUp)
router.route('/verify').post(verifyOtp)
router.route('/create-profile').post(createProfile)

module.exports = router