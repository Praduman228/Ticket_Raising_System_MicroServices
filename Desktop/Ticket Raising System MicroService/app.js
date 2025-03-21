const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const upload=require("./configs/multer-setup")
const ticketroutes=require("./routes/ticketRoutes")
const dbconnect = require('./configs/mongoose-connection');
app.use(express.json())
dbconnect()

const port = process.env.PORT || 4000
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        credentials: true,
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Authorization"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]  
    }
))

app.use('/', ticketroutes)

app.listen(port, () => {
    console.log(`Ticket Raising System Microservice is listening at http://localhost:${port}`)
})