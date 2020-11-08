const CategoryModel = {
	BIOGRAPHY: {
		id: 1,
		title: 'Biography'
	},

	BUSINESS: {
		id: 2,
		title: 'Business'
	},

	COOKBOOKS: {
		id: 3,
		title: 'Cookbooks'
	},

	HEALTH_AND_FITNESS: {
		id: 4,
		title: 'Health & Fitness'
	},

	HISTORY: {
		id: 5,
		title: 'History'
	},

	MISTERY: {
		id: 6,
		title: 'Mystery'
	},

	INSPIRATION: {
		id: 7,
		title: 'Inspiration'
	},

	ROMANCE: {
		id: 8,
		title: 'Romance'
	},

	FICTION_FANTASY: {
		id: 9,
		title: 'Fiction/Fantasy'
	},

	SELF_IMPROVEMENT: {
		id: 10,
		title: 'Self-Improvement'
	},

	HUMOR: {
		id: 11,
		title: 'Humor Books'
	},

	KIDS: {
		id: 12,
		title: 'Kids Literature'
	}
}

CategoryModel.LIST = [
	CategoryModel.BIOGRAPHY,
	CategoryModel.BUSINESS,
	CategoryModel.COOKBOOKS,
	CategoryModel.HEALTH_AND_FITNESS,
	CategoryModel.HISTORY,
	CategoryModel.MISTERY,
	CategoryModel.INSPIRATION,
	CategoryModel.ROMANCE,
	CategoryModel.FICTION_FANTASY,
	CategoryModel.SELF_IMPROVEMENT,
	CategoryModel.HUMOR,
	CategoryModel.KIDS
]

CategoryModel.ID_TO_DATA = {
	[CategoryModel.BIOGRAPHY.id]:           CategoryModel.BIOGRAPHY,
	[CategoryModel.BUSINESS.id]:            CategoryModel.BUSINESS,
	[CategoryModel.COOKBOOKS.id]:           CategoryModel.COOKBOOKS,
	[CategoryModel.HEALTH_AND_FITNESS.id]:  CategoryModel.HEALTH_AND_FITNESS,
	[CategoryModel.HISTORY.id]:             CategoryModel.HISTORY,
	[CategoryModel.MISTERY.id]:             CategoryModel.MISTERY,
	[CategoryModel.INSPIRATION.id]:         CategoryModel.INSPIRATION,
	[CategoryModel.ROMANCE.id]:             CategoryModel.ROMANCE,
	[CategoryModel.FICTION_FANTASY.id]:     CategoryModel.FICTION_FANTASY,
	[CategoryModel.SELF_IMPROVEMENT.id]:    CategoryModel.SELF_IMPROVEMENT,
	[CategoryModel.HUMOR.id]:               CategoryModel.HUMOR,
	[CategoryModel.KIDS.id]:                CategoryModel.KIDS
}

export default CategoryModel
