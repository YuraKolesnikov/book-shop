const express = require('express')

const { productsRouter } = require('./ProductsRouter')

console.log('Products router loaded')

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
	{ url: '/products', router: productsRouter }
]

module.exports = {
	ApiRouter,
	apiRouter: new ApiRouter(express.Router(), routes).apiRouter
}
