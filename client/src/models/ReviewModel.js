const ReviewModel = {
	QUALITY: {
		id: 'quality',
		title: 'Quality'
	},

	PRICE: {
		id: 'price',
		title: 'Price'
	},

	VALUE: {
		id: 'value',
		title: 'Value'
	},

	NICKNAME: {
		id: 'posted_by',
		title: 'Nickname'
	},

	REVIEW: {
		id: 'review',
		title: 'Review'
	}
}

ReviewModel.LIST = [
	ReviewModel.QUALITY,
	ReviewModel.PRICE,
	ReviewModel.VALUE,
	ReviewModel.NICKNAME,
	ReviewModel.REVIEW
]


ReviewModel.ID_TO_DATA = {
	[ReviewModel.QUALITY.id]: ReviewModel.QUALITY,
	[ReviewModel.PRICE.id]: ReviewModel.PRICE,
	[ReviewModel.VALUE.id]: ReviewModel.VALUE,
	[ReviewModel.NICKNAME.id]: ReviewModel.NICKNAME,
	[ReviewModel.REVIEW.id]: ReviewModel.REVIEW
}

export default ReviewModel
