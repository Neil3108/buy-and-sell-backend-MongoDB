const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const path = require('path')

// @desc GET specific listing
// @route GET /listings/:id
// @access Public
const getListingRoute = asyncHandler(async (req, res) => {
    const id = req.params.id
    if (!id)
    {
        return res.status(400).json({ message: 'Listing ID required' })
    }

    const listing = await User.find({id: id}).exec()

    if (!listing)
    {
        return res.status(400).json({ message: 'Listing not found!' })
    }
    res.json(listing)
})

module.exports = {getListingRoute}