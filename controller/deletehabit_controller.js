const Habit = require('../models/habit');

module.exports.delete= async function(req,res){
    //---- find the requested habit and delete it from db
    let id=req.query.id;
    await Habit.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting habit");
            return;
        }
        return res.redirect('back');
    })
}