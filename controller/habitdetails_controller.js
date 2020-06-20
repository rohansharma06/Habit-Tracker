const Habit = require('../models/habit');

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

module.exports.showDetails = async function(req,res){

    //---- get all info related to selected habit
    await Habit.findById(req.query.id, function(err, habit){
        if(err){
            console.log('Error in finding requested habit deatils');
            return;
        }
        //---- storing track of last 6 days
        const days_Track=[];
        for(let i=0;i<6;i++){
            let date1=new Date().getDate()-i +", "+ month[new Date().getMonth()];
            let date= new Date().getDate()-i +", "+ month[new Date().getMonth()]+" "+new Date().getFullYear();
            
            //---- find if the status of previous dates
            let find_status= habit.days.find(x=> x.date == date);
            if(find_status){
                days_Track.push({date:date1,status:find_status.status})
            }
            else{
                days_Track.push({date:date1,status:"None"});
            }
        }
        
        return res.render('habitDetails',{
            title: 'Details',
            habitDetail: habit,
            track:days_Track
        });
    });
}

//---- updating status of selected habit
module.exports.updateStatus = async function(req,res){
    let id=req.query.id;
    let date = req.query.date+" "+new Date().getFullYear();
    let status = req.query.status;
    
    //---- find the selected habit
    await Habit.findById(id,function(err,habit){
        if(err){
            console.log('Error in finding requested habit deatils');
            return;
        }

        //---- find status of selected habit
        let find= habit.days.find(x=> x.date == date);
        
        //---- if status is not present the add to db else update the status
        if(!find){
            habit.days.push({date:date,status:status});
            habit.save();
        }else{
            habit.days.remove(find);
            habit.days.push({date:date,status:status});
            habit.save();
        }
        res.redirect('back');
    });    
}