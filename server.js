require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')

app.use(logger)
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', require('./routes/root'))
app.use('/api/listings/:id', require('./routes/getListingRoutes'))
app.use('/api/new-listing', require('./routes/createNewListingRoutes'))
app.use('/api/listings', require('./routes/getAllListingsRoutes'))
app.use('/api/edit-listing/:id', require('./routes/updateListingRoutes'))
app.use('/api/listings/:id/add-view', require('./routes/addViewToListingRoutes'))
app.use('/api/listings/user/:userId', require('./routes/getUserListingsRoutes'))
app.use('/api/my-listings', require('./routes/getUserListingsRoutes'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html'))
    {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if (req.accepts('json'))
    {
        res.json({ message: '404 Not Found'})
    }
    else
    {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

