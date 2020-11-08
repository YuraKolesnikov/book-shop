const mongoose = require('mongoose'),
	Schema = mongoose.Schema

const BlogEntrySchema = new Schema({
	title: String,
	posted_by: String,
	posted_on: String,
})

module.exports = mongoose.model('blog-entries', BlogEntrySchema)
