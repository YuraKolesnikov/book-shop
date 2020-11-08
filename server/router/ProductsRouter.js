const express = require('express')

const { productsController } = require('../controllers/ProductsController')

class ProductsRouter {
	constructor(router, productsController) {
		this.router = router
		this.productsController = productsController
		this.setupRouter()
	}

	get productsRouter() {
		return this.router
	}

	setupRouter() {
		this.router.route('/')
			.get(this.productsController.getProducts.bind(this.productsController))
	}
}

module.exports = {
	ProductsRouter,
	productsRouter: new ProductsRouter(express.Router(), productsController).productsRouter
}
