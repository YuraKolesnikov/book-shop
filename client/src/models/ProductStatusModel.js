import ContactModel from './ContactModel';
import OrderStatusModel from './OrderStatusModel';

class ProductStatusModel {}

ProductStatusModel.NEW = {
	id: 1,
	title: 'New'
}

ProductStatusModel.HOT = {
	id: 2,
	title: 'Hot'
}

ProductStatusModel.BESTSELLER = {
	id: 3,
	title: 'Bestseller'
}

ProductStatusModel.ON_SALE = {
	id: 4,
	title: 'On sale'
}

ContactModel.LIST = [
	ProductStatusModel.NEW,
	ProductStatusModel.HOT,
	ProductStatusModel.BESTSELLER,
	ProductStatusModel.ON_SALE
]

ContactModel.ID_TO_DATA = {
	[ProductStatusModel.NEW.id]:        ProductStatusModel.NEW,
	[ProductStatusModel.HOT.id]:        ProductStatusModel.HOT,
	[ProductStatusModel.BESTSELLER.id]: ProductStatusModel.BESTSELLER,
	[ProductStatusModel.ON_SALE.id]:    ProductStatusModel.ON_SALE
}

export default ProductStatusModel
