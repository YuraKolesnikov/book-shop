class ProductError {
	constructor(message) {
		this.message = message
		this.name = 'ProductError'
	}
}

class ProductFieldError extends ProductError {
	constructor(message) {
		super(message)
		this.name = 'ProductFieldError'
	}
}

class ProductDuplicateError extends ProductError {
	constructor(message) {
		super(message);
		this.name = 'ProductDuplicateError'
	}
}

module.exports = {
	ProductError,
	ProductFieldError,
	ProductDuplicateError
}
