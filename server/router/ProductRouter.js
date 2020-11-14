const express = require('express')

const { productController } = require('../controllers/ProductController')

class ProductRouter {
	constructor(router, productController) {
		this.router = router
		this.productController = productController
		this.setupRouter()
	}

	get productRouter() {
		return this.router
	}

	setupRouter() {
		this.router.route('/')
			.get(this.productController.getProducts.bind(this.productController))

		this.router.route('/create')
			.post(this.productController.createProduct.bind(this.productController))
	}
}

module.exports = {
	ProductRouter,
	productRouter: new ProductRouter(express.Router(), productController).productRouter
}
