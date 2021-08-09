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
    },

    getOneShoe: function(req, res) {
       Shoe.findById({_id: req.params.id}, function(err, data){
          if (err) {
             console.log("Err----", err)
             res.json(err)
          } 
          else {
            console.log("Shoe found--", data)
            res.json(data)
          }

       })
    }

};//End of exports
