const Habit = require('../models/habit');

//---- find all habit and show it to home page
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