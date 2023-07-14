const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @desc GET all listings
// @route GET /listings
// @access Public
const getAllListingsRoute = asyncHandler(async (req, res) => {
    const listings = await User.find().lean()
    if (listings.length === 0)
    {
        return res.status(400).json({ message: 'No current listings available' })
    }
    res.json(listings)
})

module.exports = {getAllListingsRoute}