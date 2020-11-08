const ProductStatusModel = {
	NEW: {
		id: 1,
		title: 'New'
	},

	HOT: {
		id: 2,
		title: 'Hot'
	},

	BESTSELLER: {
		id: 3,
		title: 'Bestseller'
	},

	ON_SALE: {
		id: 4,
		title: 'On sale'
	},
}

ProductStatusModel.LIST = [
	ProductStatusModel.NEW,
	ProductStatusModel.HOT,
	ProductStatusModel.BESTSELLER,
	ProductStatusModel.ON_SALE
]

ProductStatusModel.ID_TO_DATA = {
	[ProductStatusModel.NEW.id]:        ProductStatusModel.NEW,
	[ProductStatusModel.HOT.id]:        ProductStatusModel.HOT,
	[ProductStatusModel.BESTSELLER.id]: ProductStatusModel.BESTSELLER,
	[ProductStatusModel.ON_SALE.id]:    ProductStatusModel.ON_SALE
}

export default ProductStatusModel
