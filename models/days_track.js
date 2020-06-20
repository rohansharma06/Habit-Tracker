const mongoose = require('mongoose');

const daysSchema = new mongoose.Schema({
    habit :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habit'
    },
    days: [
        {
            type: String,
        }
    ]
});