const express = require("express")
const router = require("./router/router")
const app = express()
const connect = require("./database/connection")
const cors = require("cors")

require("dotenv").config({path: "./config.env"})

const PORT = process.env.PORT

// database connection
connect()

app.use(express.json())
app.use(cors())

app.use("/api", router)
app.listen(PORT, () => {
	console.log(`Server started on http://localhost:4000`)
})
