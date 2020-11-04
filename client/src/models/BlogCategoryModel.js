class BlogCategoryModel {}

BlogCategoryModel.BOOKS = {
	id: 1,
	title: 'Books'
}

BlogCategoryModel.HISTORY = {
	id: 2,
	title: 'History'
}

BlogCategoryModel.NEWS = {
	id: 3,
	title: 'News'
}

BlogCategoryModel.LIST = [
	BlogCategoryModel.BOOKS,
	BlogCategoryModel.HISTORY,
	BlogCategoryModel.NEWS
]

BlogCategoryModel.ID_TO_DATA = {
	[BlogCategoryModel.BOOKS.id]:   BlogCategoryModel.BOOKS,
	[BlogCategoryModel.HISTORY.id]: BlogCategoryModel.HISTORY,
	[BlogCategoryModel.NEWS.id]:    BlogCategoryModel.NEWS
}

export default BlogCategoryModel
