
var mongoose = require('mongoose');
var apiController = require('./../controllers/shoes.js')

module.exports = function(app){

	app.get('/api/allShoes', apiController.showAllShoes)


};
