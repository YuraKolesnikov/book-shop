class WishListModel {}

WishListModel.PRODUCT = {
	id: 'product',
	title: 'Product'
}

WishListModel.PRICE = {
	id: 'price',
	title: 'Price'
}

WishListModel.STOCK_STATUS = {
	id: 'in_stock',
	title: 'Stock status'
}

WishListModel.LIST = [
	WishListModel.PRODUCT,
	WishListModel.PRICE,
	WishListModel.STOCK_STATUS
]


WishListModel.ID_TO_DATA = {
	[WishListModel.PRODUCT.id]: WishListModel.PRODUCT,
	[WishListModel.PRICE.id]: WishListModel.PRICE,
	[WishListModel.STOCK_STATUS.id]: WishListModel.STOCK_STATUS
}

export default WishListModel
