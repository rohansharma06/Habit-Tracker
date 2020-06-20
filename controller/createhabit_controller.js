const Habit = require('../models/habit');
const Month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
module.exports.create = function(req,res){
    let d = new Date();
    let date = d.getDate()+" "+Month[d.getMonth()]+" "+d.getFullYear();
    Habit.create({
        name: req.body.habitName,
        time: req.body.time,
        days: {date:date,status:"None"}
    },function(err,newHabit){
        if(err){
            console.log("Error in creating a Habit");
            return;
        }
        console.log('*****',newHabit);
        return res.redirect('/');
    })
}