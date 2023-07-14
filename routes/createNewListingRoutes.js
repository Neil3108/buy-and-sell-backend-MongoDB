const express = require('express')
const router = express.Router()
const createNewListingController = require('../controllers/createNewListing')

router.route('/')
    .post(createNewListingController.createNewListing)

module.exports = router