var mongoose = require('mongoose');


var ShoeSchema = new mongoose.Schema({
	brand: {type: String},
	price: {type: Number},
	name: {type: String},
}, {timestamps:true});

//Get database
mongoose.model('Shoe', ShoeSchema);
