require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/mainRoutes')
const fileUpload = require('express-fileupload')

const errorMiddleware = require('./middlewares/errorMiddleware')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/contactor', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        app.listen(PORT, ()=>console.log('App has been started on port:', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()