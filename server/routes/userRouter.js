const express = require('express')
const {createProfile, updateProfile} = require('./../controllers/userController')

const router = express.Router()

router.route('/create-profile').post(createProfile).patch(updateProfile)

module.exports = router