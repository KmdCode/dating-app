const express = require('express')
const {signUp, verifyOtp, signIn} = require('../controllers/authController')

const router = express.Router()

router.route('/signup').post(signUp)
router.route('/verify').post(verifyOtp)
router.route('/sign-in').post(signIn)

module.exports = router