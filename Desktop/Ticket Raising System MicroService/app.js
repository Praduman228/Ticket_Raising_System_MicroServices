const express = require('express')
require('dotenv').config()
const app = express()
const ticketroutes=require("./routes/ticketRoutes")
const dbconnect = require('./configs/mongoose-connection');
app.use(express.json())
app.use(ticketroutes)
dbconnect()

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Ticket Raising System Microservice is listening at http://localhost:${port}`)
})