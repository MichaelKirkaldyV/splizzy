var mongoose = require('mongoose');
var Shoe = mongoose.model('Shoe')



module.exports = {

    showAllShoes: function(req, res) {
    	Shoe.find({}, function(err, data){
        if(err){
           console.log("Returned error", err);
           res.json(err)
        }
        else {
           res.json(data)
           console.log("All the shoes...-", data);
        }
     })
    },

    register: function(req, res) {
      pass
    }

};//End of exports
