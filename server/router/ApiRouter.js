const express = require('express')

const { productsRouter } = require('./ProductsRouter')
const { userRouter } = require('./UserRouter')

class ApiRouter {
	constructor(router, routes) {
		this.router = router
		this.routes = routes
		this.setApiRoutes(routes)
	}

	get apiRouter() {
		return this.router
	}

	addApiRoute(url, router) {
		this.router.use(url, router)
	}

	setApiRoutes(routes) {
		routes.forEach(route => this.addApiRoute(route.url, route.router))
	}
}

const routes = [
	{ url: '/products', router: productsRouter },
	{ url: '/users', router: userRouter }
]

module.exports = {
	ApiRouter,
	apiRouter: new ApiRouter(express.Router(), routes).apiRouter
}
