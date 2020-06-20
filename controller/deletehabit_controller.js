const Habit = require('../models/habit');

module.exports.delete= function(req,res){
    let id=req.query.id;
    Habit.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting habit");
            return;
        }
        return res.redirect('back');
    })
}