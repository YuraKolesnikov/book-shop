const { productService } = require('../services/ProductService')
const getTypeOf = require('../utils/typeof')

class ProductController {
	constructor(productService) {
		this.productsModel = productService
	}

	async getProducts(req, res) {
		const { query } = req

		const products = await productService.getProducts(query)
		return products.length ? res.status(200).send(products) : res.status(404).send({ message: 'Products not found' })
	}

	async createProduct(req, res) {
		const { body } = req


		Object.keys(body).forEach(key => {
			if (!body[key]) {
				delete body[key]
			}
		})

		try {
			const result = await productService.createProduct(body)
			console.log(getTypeOf(result))
			res.status(201).send(result)
		} catch(error) {
			res.status(400).send({ message: error.message })
		}
	}
}

module.exports = {
	ProductController: ProductController,
	productController: new ProductController(productService)
}
