const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")

app.use(cors({ origin: [process.env.CLIENT_ORIGIN, 'http://localhost:3000'] }))

const PORT = process.env.PORT || 8081

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`)
})