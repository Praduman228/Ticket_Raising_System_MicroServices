const ticketModel = require("../models/ticket-model")
module.exports.TicketCreation=async function(req,res){
    console.log("Creating new ticket")
    console.log(req.body)
    try{
    const ticket = new ticketModel({
        subject: req.body.subject,
        message: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        groups: req.body.group,
        createdAt: Date.now(),
    })
    if (req.file){
        ticket.AttachFile.push({
            filename: req.file.filename,
            contentType: req.file.mimetype,
            data: req.file.buffer
        })
    }
    await ticket.save()
    res.status(201).json({
        message: "Ticket created successfully",
       
    })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error",
            error: err
        })
}
}