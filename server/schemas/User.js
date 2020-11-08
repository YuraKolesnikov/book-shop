const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true
	},
	fullName: {
		type: String,
		trim: true
	}
})

module.exports = mongoose.model('users', UserSchema)