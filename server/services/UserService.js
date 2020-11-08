const { userModel } = require('../models/UserModel')

class UserService {
	constructor(userModel) {
		this.userModel = userModel
	}

	async register({ username, password }) {
		try {
			await this.userModel.register({ username, password })
		} catch (error) {
			throw error
		}
	}
}

module.exports = {
	UserService,
	userService: new UserService(userModel)
}