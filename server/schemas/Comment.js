const mongoose = require('mongoose'),
	Schema = mongoose.Schema

const CommentSchema = new Schema({
	text: String,
	posted_by: String,
	posted_on: String,
	responses: Array,
	_id: Schema.Types.ObjectId,
	product_id: Schema.Types.ObjectId,
})

module.exports = mongoose.model('comments', CommentSchema)
