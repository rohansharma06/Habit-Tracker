const mongoose = require('mongoose');


//----Defining schema structure (document/Schema)
const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    days: []
});

//---- collection
const Habit = mongoose.model('habit', habitSchema);

module.exports = Habit;