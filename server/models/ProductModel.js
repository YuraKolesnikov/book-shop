const mongoose = require('mongoose'),
	    Product = require('../schemas/Product')
const { ProductError, ProductFieldError, ProductDuplicateError } = require('../errors/ProductErrors')
const { mongoService } = require('../services/MongoService')

class ProductModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async getProducts() {
		const data = await Product.find({})
		return data
	}

	async createProduct(payload) {
		if (!payload.title || payload.title.length < 2) {
			throw new ProductFieldError(`Invalid or empty field: Title`)
		}

		if (!payload.price) {
			throw new ProductFieldError('Invalid or empty field: Price')
		}

		if (!payload.category) {
			throw new ProductFieldError('Invalid or empty field: Category')
		}

		if (!payload.publish_year) {
			throw new ProductFieldError('Invalid or empty field: Publish year')
		}

		const duplicateProduct = await Product.findOne({ title: payload.title, category: payload.category, publish_year: payload.publish_year })

		if(duplicateProduct) {
			throw new ProductDuplicateError(`Found duplicate with these data: Title: ${payload.title}, author: ${payload.author}, publish year: ${payload.publish_year}`)
		}

		try {
			const newProduct  = new Product(payload)
			newProduct._id    = mongoose.Types.ObjectId()
			await newProduct.save()
			return newProduct
		} catch {
			throw new ProductError('Could not create the product')
		}
	}
}

module.exports = {
	ProductModel: ProductModel,
	productModel: new ProductModel(mongoService)
}
