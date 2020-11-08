const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const Category = new Schema({
	title: String,
	id: Number,
	_id: Schema.Types.ObjectId
})

module.exports = mongoose.model('categories', Category)