const express = require('express')
const router = express.Router({ mergeParams: true });
const getListingController = require('../controllers/getListing')

router.route("/")
    .get(getListingController.getListingRoute)

module.exports = router