class SortingModel {}

SortingModel.BEST_MATCH = {
	id: 'best_match',
	title: 'Best match'
}

SortingModel.PRICE_ASC = {
	id: 'price_asc',
	title: 'Price ascending'
}

SortingModel.PRICE_DESC = {
	id: 'price_desc',
	title: 'Price descending'
}

SortingModel.PUBLISH_DATE_ASC = {
	id: 'publish_date_asc',
	title: 'Author name ascending'
}

SortingModel.PUBLISH_DATE_DESC = {
	id: 'publish_date_desc',
	title: 'Author name descending'
}

SortingModel.AUTHOR_NAME_ASC = {
	id: 'author_name_asc',
	title: 'Author name ascending'
}

SortingModel.AUTHOR_NAME_DESC = {
	id: 'author_name_desc',
	title: 'Author name descending'
}

SortingModel.TITLE_ASC = {
	id: 'title_asc',
	title: 'Title ascending'
}

SortingModel.TITLE_DESC = {
	id: 'title_desc',
	title: 'Title descending'
}

SortingModel.NEW_FIRST = {
	id: 'new_first',
	title: 'New first'
}

SortingModel.HOT_FIRST = {
	id: 'hot_first',
	title: 'Hot first'
}

SortingModel.BESTSELLER = {
	id: 'bestseller_first',
	title: 'Bestseller first'
}

SortingModel.ON_SALE = {
	id: 'on_sale_first',
	title: 'On sale first'
}

SortingModel.LIST = [
	SortingModel.BEST_MATCH,
	SortingModel.PRICE_ASC,
	SortingModel.PRICE_DESC,
	SortingModel.PUBLISH_DATE_ASC,
	SortingModel.PUBLISH_DATE_DESC,
	SortingModel.AUTHOR_NAME_ASC,
	SortingModel.AUTHOR_NAME_DESC,
	SortingModel.TITLE_ASC,
	SortingModel.TITLE_DESC,
	SortingModel.NEW_FIRST,
	SortingModel.HOT_FIRST,
	SortingModel.BESTSELLER,
	SortingModel.ON_SALE
]

SortingModel.ID_TO_DATA = {
	[SortingModel.BEST_MATCH.id]: SortingModel.BEST_MATCH,
	[SortingModel.PRICE_ASC.id]: SortingModel.PRICE_ASC,
	[SortingModel.PRICE_DESC.id]: SortingModel.PRICE_DESC,
	[SortingModel.PUBLISH_DATE_ASC.id]: SortingModel.PUBLISH_DATE_ASC,
	[SortingModel.PUBLISH_DATE_DESC.id]: SortingModel.PUBLISH_DATE_DESC,
	[SortingModel.AUTHOR_NAME_ASC.id]: SortingModel.AUTHOR_NAME_ASC,
	[SortingModel.AUTHOR_NAME_DESC.id]: SortingModel.AUTHOR_NAME_DESC,
	[SortingModel.TITLE_ASC.id]: SortingModel.TITLE_ASC,
	[SortingModel.TITLE_DESC.id]: SortingModel.TITLE_DESC,
	[SortingModel.NEW_FIRST.id]: SortingModel.NEW_FIRST,
	[SortingModel.HOT_FIRST.id]: SortingModel.HOT_FIRST,
	[SortingModel.BESTSELLER.id]: SortingModel.BESTSELLER,
	[SortingModel.ON_SALE.id]: SortingModel.ON_SALE
}
