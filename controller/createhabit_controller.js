// add db
module.exports.create = function(req,res){
    console.log(req.body);
    console.log(req.body.habitName);
    return res.redirect('/');
}