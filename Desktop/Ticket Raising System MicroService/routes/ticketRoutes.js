const express =require('express')
const router=express.Router()
const ticketModel=require("../models/ticket-model")
const upload = require("../configs/multer-setup")
const {TicketCreation}=require("../controllers/ticketCreationController")
// GET request for all tickets

router.get('/', function(req, res) {
   res.send('Ticket Raising System Microservice is running.....')
})

router.post("/createticket",upload.single("file"),TicketCreation)

// GET request for a single ticket

router.get("/ticket/:id",async(req,res)=>{
   await ticketModel.findById(req.params.id,(err,data)=>{
        if(err){
            res.status(500).json({
                message: "Internal Server Error",
                error: err
            })
        }else if(!data){
            res.status(404).json({
                message: "Ticket not found",
                error: err
            })
        }else{
            res.status(200).json({
                message: "Ticket fetched successfully",
                data: data
            })
        }
    })
})


// PUT request for updating a ticket

router.put("/updateticket/:id/:status",async(req,res)=>{
    await ticketModel.findByIdAndUpdate(req.params.id,{$set:{status: req.params.status}},{new:true},(err,data)=>{
        if(err){
            res.status(500).json({
                message: "Internal Server Error",
                error: err
            })
        }else if(!data){
            res.status(404).json({
                message: "Ticket not found",
                error: err
            })
        }else{
            res.status(200).json({
                message: "Ticket status updated successfully",
                data: data
            })
        }
    })
})

// DELETE request for deleting a ticket

router.delete("/deleteticket/:id",async(req,res)=>{
   await ticketModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.status(500).json({
                message: "Internal Server Error",
                error: err
            })
        }else if(!data){
            res.status(404).json({
                message: "Ticket not found",
                error: err
            })
        }else{
            res.status(200).json({
                message: "Ticket deleted successfully",
                data: data
            })
        }
    })
})
// GET request for all tickets
router.get("/alltickets",async(req,res)=>{
 try{
     const tickets = await ticketModel.find({})
     res.status(200).json({
         message: "All tickets fetched successfully",
         data: tickets
     })
     }catch(err){
         res.status(500).json({
             message: "Internal Server Error",
             error: err
         })
 }
})

module.exports = router