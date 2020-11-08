const { productsModel } = require('../models/ProductsModel')

class ProductsController {
	constructor(productsModel) {
		this.productsModel = productsModel
	}

	async getProducts(req, res) {
		const products = await productsModel.getProducts()
		res.status(200).send(products)
	}
}

module.exports = {
	ProductsController,
	productsController: new ProductsController(productsModel)
}
