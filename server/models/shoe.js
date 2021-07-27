var mongoose = require('mongoose');


var ShoeSchema = new mongoose.Schema({
	brand: {type: String},
	price: {type: Number},
	name: {type: String},
	url: {type: String},
}, {timestamps: true});

var UserSchema = new mongoose.Schema({
  email: {type: String, required: [true, "email is needed"], minlength: 6},
  password: {type: Number, required: [true, "password is required"], minlength: 5}
}, {timestamps: true});

//Get database
mongoose.model('Shoe', ShoeSchema);
