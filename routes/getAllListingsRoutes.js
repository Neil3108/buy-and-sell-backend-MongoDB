const express = require('express')
const router = express.Router()
const allListingsController = require('../controllers/getAllListings')

router.route('/')
    .get(allListingsController.getAllListingsRoute)
module.exports = router