const Habit = require('../models/habit');
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days_Track=[];



module.exports.showDetails = function(req,res){
    console.log(req.query.id);
    Habit.findById(req.query.id, function(err, habit){
        if(err){
            console.log('Errer in finding requested habit deatils');
            return;
        }
        //---- storing track of last 6 days
        for(let i=0;i<6;i++){
            let date1=new Date().getDate()-i +", "+ month[new Date().getMonth()];
            let date= new Date().getDate()-i +" "+ month[new Date().getMonth()]+" "+new Date().getFullYear();
            
            //---- find if the status of previous dates
            let find_status= habit.days.find(x=> x.date == date);
            if(find_status){
                days_Track.push({date:date1,status:find_status.status})
            }
            else{
                days_Track.push({date:date1,status:"Not Mark"});
            }
        }
        return res.render('habitDetails',{
            title: 'Details',
            habitDetail: habit,
            track:days_Track
        });
    });
}