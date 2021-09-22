const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    status: {  type: String,  required: false },
    
});

module.exports = new mongoose.model('status', statusSchema);
