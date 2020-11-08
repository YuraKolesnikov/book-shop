const mongoose = require('mongoose'),
	    Schema = mongoose.Schema

const ProductSchema = new Schema({
	title: String,
	price: Number,
	price_new: [null, Number],
	category: Number,
	label: Number,
	img_url: String,
	description: String,
	reviews: Array,
	_id: Schema.Types.ObjectId
})

module.exports = mongoose.model('products', ProductSchema)
