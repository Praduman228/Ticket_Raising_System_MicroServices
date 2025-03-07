const mongoose = require('mongoose');

function dbconnect(){
    try{
    mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB');
    }catch(e){
        console.error('Error connecting to MongoDB:', e.message);
        process.exit(1);  // Exit with failure.
    }
}

   
module.exports = dbconnect;