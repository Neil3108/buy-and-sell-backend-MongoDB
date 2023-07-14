const express = require('express')
const router = express.Router({ mergeParams: true })
const addViewToListingController = require('../controllers/addViewToListing')

router.route('/')
    .post(addViewToListingController.addViewToListingRoute)

module.exports = router