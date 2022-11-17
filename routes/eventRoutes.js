const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventController')

router.get('/get', eventController.getData)

router.post('/', eventController.addData)

router.put('/:id', eventController.updateData)

module.exports = router
