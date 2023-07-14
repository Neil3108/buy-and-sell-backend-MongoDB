const User = require('../models/User')
const asyncHandler = require('express-async-handler')
// @desc GET specific listing
// @route GET /listings/user/{userID}
// @access Public
const getUserListingsRoute = asyncHandler(async (req, res) => {
    const userId  = req.params.userId

    if (!userId)
    {
        return res.status(400).json({ message: 'User ID required' })
    }

    const listing = await User.find({user_id: userId}).exec()

    if (!listing)
    {
        return res.status(400).json({ message: 'Listing not found!' })
    }

    res.json(listing)
})

module.exports = {getUserListingsRoute}