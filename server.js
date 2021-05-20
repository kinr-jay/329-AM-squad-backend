// Environment Variables
require("dotenv").config()
const { PORT = 4500, NODE_ENV = "development" } = process.env

// Mongoose Connection
const mongoose = require("./db/connection.js")

// CORS Import
const cors = require("cors")
const corsOptions = require("./config/cors.js")

// Express Import and App Initialization
const express = require("express")
const app = express()

// Logger for HTTP requests
const morgan = require("morgan")

// Middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.get("/", (req, res) => {
  res.json({ welcome: "to the Hotel California" })
})

const tuneController = require("./controllers/tunes.js")
app.use("/tunes", tuneController)

// Listener
app.listen(PORT, () => {
  console.log(`Server app is listening on port ${PORT}`)
})
