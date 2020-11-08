const { userService } = require('../services/UserService')

class UserController {
	constructor(userService) {
		this.userService = userService
	}

	async register(req, res) {
		const { username, password } = req.body
		try {
			await this.userService.register({ username, password })
			res.status(201).send({ message: 'Register successful' }) /* TODO: Сделать файл с константами Http статусов */
		} catch (error) {
			res.status(500).send({ error })
		}
	}
}

module.exports = {
	UserController,
	userController: new UserController(userService)
}