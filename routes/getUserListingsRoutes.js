const express = require('express')
const router = express.Router({ mergeParams: true })
const getUserListingsController = require('../controllers/getUserListings')

// router.use(function(req, res, next) {
//     console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
//     console.log("Reached getUserListingsRoutes with the id " + req.params.userId)
//     next();
// });


router.route('/')
    .get(getUserListingsController.getUserListingsRoute)

module.exports = router