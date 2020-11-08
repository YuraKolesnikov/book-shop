const mongoose = require('mongoose'),
	    Schema = mongoose.Schema

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true
	},
	price_new: {
		type: Number,
		default: null
	},
	category: Number,
	label: Number,
	img_url: String,
	description: String,
	reviews: Array,
	_id: Schema.Types.ObjectId
})

module.exports = mongoose.model('products', ProductSchema)
