const mongoose = require('mongoose'),
	    Product = require('../schemas/Product')

const { mongoService } = require('../services/MongoService')

class ProductsModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async getProducts() {
		const data = await Product.find({})
		return data
	}
}

module.exports = {
	ProductsModel,
	productsModel: new ProductsModel(mongoService)
}
