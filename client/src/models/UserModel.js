const UserModel = {
	LOGIN: {
		id: 'login',
		title: 'Login'
	},

	PASSWORD: {
		id: 'password',
		title: 'Password'
	}
}

UserModel.LIST = [
	UserModel.LOGIN,
	UserModel.PASSWORD
]

UserModel.ID_TO_DATA = {
	[UserModel.LOGIN.id]:     UserModel.LOGIN,
	[UserModel.PASSWORD.id]:  UserModel.PASSWORD
}

export default UserModel
