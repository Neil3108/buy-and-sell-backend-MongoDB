const express = require('express')
const router = express.Router({ mergeParams: true })
const updateListingController = require('../controllers/updateListing')
const deleteListingController = require('../controllers/deleteListing')

router.route('/')
    .patch(updateListingController.updateListingRoute)
    .delete(deleteListingController.deleteListingRoute)

module.exports = router