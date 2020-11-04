class PaymentModel {}

PaymentModel.CASH_ON_DELIVERY = {
	id: 1,
	title: 'Cash on Delivery',
	componentName: ''
}

PaymentModel.CARD_ON_DELIVERY = {
	id: 2,
	title: 'Card on Delivery'
}

PaymentModel.ONLINE = {
	id: 3,
	title: 'Online payment'
}

PaymentModel.LIST = [
	PaymentModel.CASH_ON_DELIVERY,
	PaymentModel.CARD_ON_DELIVERY,
	PaymentModel.ONLINE
]


PaymentModel.ID_TO_DATA = {
	[PaymentModel.CASH_ON_DELIVERY.id]: PaymentModel.CASH_ON_DELIVERY,
	[PaymentModel.CARD_ON_DELIVERY.id]: PaymentModel.CARD_ON_DELIVERY,
	[PaymentModel.ONLINE.id]: PaymentModel.ONLINE
}

export default PaymentModel
