const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    date: {  type: String,  required: false },
    taskname: {type: String, required: false},
    subject:{type:String,required: false},
    Assigned: {   type: mongoose.Schema.ObjectId,   required: false  },
    Status: {  type: mongoose.Schema.ObjectId,   required: false  },

});

module.exports = new mongoose.model('task', taskSchema);
