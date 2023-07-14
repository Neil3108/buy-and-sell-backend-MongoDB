const User = require('../models/User')
const asyncHandler = require('express-async-handler')

const addViewToListingRoute = asyncHandler(async(req, res) => {
    const id = req.params.id
    const listing = await User.findOne({id: id}).exec()
    if(!listing)
    {
        return res.status(400).json({ message: 'Listing not found' })
    }
    listing.views += 1;

    const updatedListing = await listing.save()

    res.json ({ message: `Listing ${updatedListing.name}'s view has been updated!`})
})

module.exports = {addViewToListingRoute}