const Habit = require('../models/habit');

module.exports.home = function(req,res){

    Habit.find({}, function(err,allhabits){
        if(err){
            console.log("Error in finding habits fro db");
            return;
        }
        return res.render('home',{
            title: 'Home',
            allHabits: allhabits
        });
    });
}