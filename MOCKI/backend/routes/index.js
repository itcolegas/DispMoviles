const express = require('express')
const router = express.Router()

const { getQuestions } = require('../controllers')

router.get('/get-questions', getQuestions)

module.exports = router
