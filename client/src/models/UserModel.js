import ContactModel from './ContactModel';
import ProductStatusModel from './ProductStatusModel';

class UserModel {}

UserModel.LOGIN = {
	id: 'login',
	title: 'Login'
}

UserModel.PASSWORD = {
	id: 'password',
	title: 'Password'
}

UserModel.ID_TO_DATA = {
	[UserModel.LOGIN.id]:     UserModel.LOGIN,
	[UserModel.PASSWORD.id]:  UserModel.PASSWORD
}

export default UserModel
