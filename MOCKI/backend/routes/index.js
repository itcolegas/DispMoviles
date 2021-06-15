const express = require('express')
const router = express.Router()

const { getQuestions, updateUser, getUserProgress } = require('../controllers')

router.get('/get-questions', getQuestions)
router.post('/get-questions', getQuestions)
router.post('/update-user', updateUser)
router.get('/get-userProgress/:user', getUserProgress)

module.exports = router
