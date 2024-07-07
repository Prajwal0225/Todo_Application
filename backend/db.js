const mongoose = require("mongoose");


const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    completed:{
        type: Boolean,
        default: false
    }
})

const todos = mongoose.model('todos',todoschema);

module.exports = todos;
