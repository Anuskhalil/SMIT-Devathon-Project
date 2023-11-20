const cookieParser = require('cookie-parser')
const express = require('express')
// require("./EmployeeApiSetUp/Connect");
// const employee = require("./EmployeeApiSetUp/EmployeeRoute");
require('dotenv').config()
const port = process.env.SERVER_PORT || 3000
const app = express()

// const cors = require('cors')


// app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
// app.use(employee);


app.use('/api', require('./api/Router'))

const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("DB is Connected")

} catch (error) {
    console.log("Error")
}



app.listen(port, () => {
    console.log(`App is listening on this port ${port}`)
})