const mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String },
    imgUrl: { type: String },
    price: { type: Number},
    dateAdded: { type: Date },
    city: { type: String },
});
        
module.exports = mongoose.model('Item', ItemSchema);