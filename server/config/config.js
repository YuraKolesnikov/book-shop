const config = {
	MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/book-shop',
	port: process.env.PORT || 3000
}

module.exports = config
