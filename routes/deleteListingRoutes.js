const express = require('express')
const router = express.Router()
const deleteListingController = require('../controllers/deleteListing')

router.route('/')
    .delete(deleteListingController.getAllListingsRoute)

module.exports = router