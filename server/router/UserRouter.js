const express = require('express')

const { userController } = require('../controllers/UserController')

class UserRouter {
	constructor(router, userController) {
		this.router = router
		this.userController = userController
		this.setupRouter()
	}

	get userRouter() {
		return this.router
	}

	setupRouter() {
		this.router.route('/register')
			.post(this.userController.register.bind(this.userController))

		this.router.route('/login')
			.post(this.userController.login.bind(this.userController))

		this.router.route('/subscribe')
			.post(this.userController.subscribe.bind(this.userController))

		this.router.route('/update')
			.post(this.userController.updateUser.bind(this.userController))
	}
}

module.exports = {
	UserRouter,
	userRouter: new UserRouter(express.Router(), userController).userRouter
}
