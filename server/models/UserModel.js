const BcryptService = require('../services/BcryptService')
const User = require('../schemas/User')
const { mongoService } = require('../services/MongoService')

class UserModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async register({ username, password }) {
		const duplicateUser = await User.findOne({ username })

		console.log(duplicateUser)

		if (duplicateUser) {
			throw ({ message: 'Username already taken!' })
		}

		const newUser = new User({ username, password })

		const salt = await BcryptService.genSalt(10)
		const hash = await BcryptService.genHash(newUser.password, salt)

		newUser.password = hash

		try {
			await newUser.save()
		} catch (error) {
			throw (error)
		}
	}
}

module.exports = {
	UserModel,
	userModel: new UserModel(mongoService)
}