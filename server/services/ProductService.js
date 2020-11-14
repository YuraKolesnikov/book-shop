const { productModel } = require('../models/ProductModel')

class ProductService {
	constructor(productModel) {
		this.productModel = productModel
	}

	async getProducts(query) {
		/* Prepare query */
		const products = await this.productModel.getProducts(query)
		return products
	}

	async createProduct(payload) {
		try {
			const result = await this.productModel.createProduct(payload)
			return result
		} catch(error) {
			console.log(error.message)
			throw error
		}
	}
}

module.exports = {
	ProductService,
	productService: new ProductService(productModel)
}
