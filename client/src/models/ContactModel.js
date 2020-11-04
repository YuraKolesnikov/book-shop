import CategoryModel from './CategoryModel';

class ContactModel {}

ContactModel.FIRST_NAME = {
	id: 'first_name',
	title: 'First name'
}

ContactModel.LAST_NAME = {
	id: 'last_name',
	title: 'Last name'
}

ContactModel.COMPANY_NAME = {
	id: 'company_name',
	title: 'Company name'
}

ContactModel.EMAIL = {
	id: 'email',
	title: 'Email'
}

ContactModel.PHONE = {
	id: 'phone',
	title: 'Phone'
}

ContactModel.WEBSITE = {
	id: 'website',
	title: 'Website'
}

ContactModel.MESSAGE = {
	id: 'message',
	title: 'Type your message here...'
}

ContactModel.COUNTRY = {
	id: 'country',
	title: 'Country',
	options: []
}

ContactModel.ADDRESS = {
	id: 'address',
	title: 'Address'
}

ContactModel.POSTCODE = {
	id: 'postcode',
	title: 'Postcode / ZIP'
}

ContactModel.ID_TO_DATA = {
	[ContactModel.FIRST_NAME.id]:   ContactModel.FIRST_NAME,
	[ContactModel.LAST_NAME.id]:    ContactModel.LAST_NAME,
	[ContactModel.COMPANY_NAME.id]: ContactModel.COMPANY_NAME,
	[ContactModel.EMAIL.id]:        ContactModel.EMAIL,
	[ContactModel.PHONE.id]:        ContactModel.PHONE,
	[ContactModel.WEBSITE.id]:      ContactModel.WEBSITE,
	[ContactModel.MESSAGE.id]:      ContactModel.MESSAGE,
	[ContactModel.COUNTRY.id]:      ContactModel.COUNTRY,
	[ContactModel.ADDRESS.id]:      ContactModel.ADDRESS,
	[ContactModel.POSTCODE.id]:     ContactModel.POSTCODE
}

export default ContactModel
