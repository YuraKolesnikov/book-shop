class CartModel {}

CartModel.IMAGE = {
	id: 'image',
	title: 'Image'
}

CartModel.PRODUCT = {
	id: 'product',
	title: 'Product'
}

CartModel.PRICE = {
	id: 'price',
	title: 'Price'
}

CartModel.QUANTITY = {
	id: 'quantity',
	title: 'Quantity'
}

CartModel.TOTAL = {
	id: 'total',
	title: 'Total'
}

CartModel.LIST = [
	CartModel.IMAGE,
	CartModel.PRODUCT,
	CartModel.PRICE,
	CartModel.QUANTITY,
	CartModel.TOTAL
]

CartModel.ID_TO_DATA = {
	[CartModel.IMAGE.id]: CartModel.IMAGE,
	[CartModel.PRODUCT.id]: CartModel.PRODUCT,
	[CartModel.PRICE.id]: CartModel.PRICE,
	[CartModel.QUANTITY.id]: CartModel.QUANTITY,
	[CartModel.TOTAL.id]: CartModel.TOTAL
}

export default CartModel
