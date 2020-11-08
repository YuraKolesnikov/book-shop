const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const ReviewSchema = new Schema({
	quality: Number,
	price: Number,
	value: Number,
	posted_by: String,
	posted_on: String,
	_id: Schema.Types.ObjectId,
	product_id: Schema.Types.ObjectId,
})

module.exports = mongoose.model('reviews', ReviewSchema)
