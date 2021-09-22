const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    name: {  type: String,  required: false },
    mobile: {type: String, required: false},
    email: {type: String, required: false },
    password: { type: String,  required: false },
    start:{type:String},
    end:{type:String},
    Task : {   type: mongoose.Schema.ObjectId,   required: false  },
    Status:{type: mongoose.Schema.ObjectId,   required: false}
    
    

    
})
module.exports = new mongoose.model('employee',employeeSchema);
