var mongoose = require('mongoose');
var MSvie = mongoose.model('Shoe')



module.exports = {

    showAllShoes: function(req, res) {
    	Shoe.find({}, function(err, data){
        if(err){
           console.log("Returned error", err);
           res.json(err)
        }
        else {
           res.json(data)
        }
     })
    }

};//End of exports
