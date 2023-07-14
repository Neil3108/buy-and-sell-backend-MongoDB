const User = require('../models/User')
const asyncHandler = require('express-async-handler')

const deleteListingRoute = asyncHandler(async(req, res) => {
    const id = req.params.id

    if (!id)
    {
        return res.status(400).json({ message: 'Listing ID required' })
    }

    const listing = await User.findOne({id: id}).exec()

    if (!listing)
    {
        return res.status(400).json({ message: 'Listing not found!' })
    }

    const result = await listing.deleteOne()

    const reply = `Listing ${result.name} deleted!`

    res.json(reply)
})

module.exports = {deleteListingRoute}