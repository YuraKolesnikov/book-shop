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
	}
}

module.exports = {
	UserRouter,
	userRouter: new UserRouter(express.Router(), userController).userRouter
}