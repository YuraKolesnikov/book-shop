const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const BlogEntrySchema = new Schema({
	title: String,
	posted_by: String,
	posted_on: String,
	caption: String,
	category: Number,
	img_path: String,
	text: String,
	comments: Array,
	_id: Schema.Types.ObjectId
})

module.exports = mongoose.model('blog-entries', BlogEntrySchema)
