const express = require('express')
const {
    createProfile, 
    userProfileInfo, 
    deleteUserProfile, 
    updateUserProfile, 
    createDate,
    dateInfo,
    getAllDates,
    getDateById,
    applyForDate
} = require('./../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
const upload = require('../middleware/multerConfig')

const router = express.Router()

router.post('/create-profile', upload.single('profilePicture'), createProfile);
router.route('/profile').get(protect, userProfileInfo)
router.route('/delete-profile').delete(protect, deleteUserProfile)
router.route('/update-profile').put(protect, updateUserProfile);
router.route('/dates').post(protect, createDate)
router.route('/dates').get(protect, dateInfo)
router.route('/all-dates').get(protect, getAllDates)
router.route('/date/:id').get(protect, getDateById)
router.route('/apply/:id').post(protect, applyForDate)


module.exports = router