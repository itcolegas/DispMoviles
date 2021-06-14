const express = require('express')
const router = express.Router()

const { getQuestions, updateUser } = require('../controllers')

router.get('/get-questions', getQuestions)
router.post('/get-questions', getQuestions)
router.post('/update-user', updateUser)

module.exports = router
