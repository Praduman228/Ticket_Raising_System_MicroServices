const  mongoose =require("mongoose");

const TicketSchema=mongoose.Schema({
    ticketId:{
        type: String,
        required: true,
        unique: true
    },
    priority:{
        type: String,
        enum: ["low", "medium", "high"],
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    Website:{
        type: String,
        cnum:["www.techkisan.com","www.techkisan.in"],
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["open", "in progress", "closed"],
        required: true, 
        default: "open"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    closeAt: {
        type: Date,
        default: Date.now
    },
    AssignedTo: {
        type: mongoose.Schema.Types.ObjectId,
    },
})

module.exports= mongoose.model("Ticket", TicketSchema)