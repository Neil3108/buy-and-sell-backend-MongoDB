const User = require('../models/User')
const asyncHandler = require('express-async-handler')

const updateListingRoute = asyncHandler(async(req, res) => {
    const id = req.params.id
    const {name, description, price} = req.body;
    const userID = '12345';

    if (!id || !name || !description || !price)
    {
        return res.status(400).json({ message: 'Something missing' })
    }

    const listing = await User.findOne({id: id}).exec()

    if(!listing)
    {
        return res.status(400).json({ message: 'Listing not found' })
    }
    listing.name = name
    listing.description = description
    listing.price = price

    const updatedListing = await listing.save()

    res.json ({ message: `Listing ${updatedListing.name} is updated!`})
})

module.exports = {updateListingRoute}