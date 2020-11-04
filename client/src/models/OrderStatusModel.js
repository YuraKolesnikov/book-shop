import ContactModel from './ContactModel';

class OrderStatusModel {}

OrderStatusModel.WAITING_FOR_PAYMENT = {
	id: 1,
	title: 'Waiting for payment'
}

OrderStatusModel.PAID = {
	id: 2,
	title: 'Paid'
}

OrderStatusModel.SHIPPING = {
	id: 3,
	title: 'Shipping'
}

OrderStatusModel.DELIVERED = {
	id: 4,
	title: 'Delivered'
}

OrderStatusModel.CANCELED = {
	id: 5,
	title: 'Canceled'
}

OrderStatusModel.REFUNDED = {
	id: 6,
	title: 'Refunded'
}

OrderStatusModel.LIST = [
	OrderStatusModel.WAITING_FOR_PAYMENT,
	OrderStatusModel.PAID,
	OrderStatusModel.SHIPPING,
	OrderStatusModel.DELIVERED,
	OrderStatusModel.CANCELED,
	OrderStatusModel.REFUNDED
]

ContactModel.ID_TO_DATA = {
	[OrderStatusModel.WAITING_FOR_PAYMENT.id]:  OrderStatusModel.WAITING_FOR_PAYMENT,
	[OrderStatusModel.PAID.id]:                 OrderStatusModel.PAID,
	[OrderStatusModel.SHIPPING.id]:             OrderStatusModel.SHIPPING,
	[OrderStatusModel.DELIVERED.id]:            OrderStatusModel.DELIVERED,
	[OrderStatusModel.CANCELED.id]:             OrderStatusModel.CANCELED,
	[OrderStatusModel.REFUNDED.id]:             OrderStatusModel.REFUNDED
}

export default OrderStatusModel
