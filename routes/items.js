var express = require('express');
var router = express.Router();
const ItemModel = require('../models/item');
const ItemController = require('../controllers/Item');

// Get new items
router.get('/new', function(req, res){
	res.render('create-item');
});

// Create new item
router.post('/new', function(req, res){
	console.log("debug", req.body)
    var name = req.body.name;
	var userId = req.user._id;
	var imgUrl = req.body.imgUrl;

  	let errors;

	if(errors){
		res.render('create-item',{
			errors: errors
		});
	} else {
		var newItem= new ItemModel({
            userId: userId,
            name: name,
            imgUrl: imgUrl,
		});

		ItemController.create(newItem, function(err, item){
			if(err) throw err;
			console.log(item);
		});

		req.flash('success_msg', 'You created an item successfully');

		res.redirect('/');
	}
});

module.exports = router;