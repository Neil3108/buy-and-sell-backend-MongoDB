const uuid = require('uuid')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

const createNewListing = asyncHandler(async (req, res) => {
    const id = uuid.v4()
    const userID = '12345';
    const { name, description, price } = req.body
    const views = 0
    const listingObject = { id, name, description, price, "user_id": userID, views }
    const listing = await User.create(listingObject)

    if (listing)
        res.status(201).json({ message: `New listing with the name ${name} created`})
    else
        res.status(400).json({ message: 'Invalid data'})

    return listing
})

module.exports = {createNewListing}