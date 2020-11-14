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

	async login(req, res) {
		const { username, password } = req.body
		res.status(200).send()
	}

	async subscribe(req, res) {
		const { email } = req.body
		res.status(200).send({ message: 'Subscribed!' })
	}

	async updateUser(req, res) {
		res.status(202).send({ message: 'User updated' })
	}
}

module.exports = {
	UserController,
	userController: new UserController(userService)
}
