const express =require('express')
const router=express.Router()


// GET request for all tickets

router.get('/', function(req, res) {
   res.send('Ticket Raising System Microservice is running.....')
})
router.get("/tickets",(req,res)=>{
    res.json({
        message: "All tickets fetched successfully",
        data: [
            {id: 1, title: "Ticket 1", description: "Description of ticket 1"},
            {id: 2, title: "Ticket 2", description: "Description of ticket 2"},
            {id: 3, title: "Ticket 3", description: "Description of ticket 3"}
        ]
    })
})

module.exports = router