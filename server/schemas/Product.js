const mongoose = require('mongoose'),
	    Schema = mongoose.Schema

const ProductSchema = new Schema({
	title: {
		type: String,
		minlength: 2,
		trim: true
	},
	author: {
		type: String,
		minlength: 2
	},
	price: {
		type: Number
	},
	price_new: {
		type: Number,
		default: null
	},
	category: Number,
	label: {
		type: Number,
		default: 0
	},
	first_publish_year: Number,
	publish_year: Number,
	img_url: String,
	description: String,
	reviews: Array,
	created_at: String, /* dd-mm-yyyy */
	_id: Schema.Types.ObjectId
})

module.exports = mongoose.model('products', ProductSchema)
