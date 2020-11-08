import CountryCodes from './CountryCodes';

const ContactModel = {
	FIRST_NAME: {
		id: 'first_name',
		title: 'First name'
	},

	LAST_NAME: {
		id: 'last_name',
		title: 'Last name'
	},

	COMPANY_NAME: {
		id: 'company_name',
		title: 'Company name'
	},

	EMAIL: {
		id: 'email',
		title: 'Email'
	},

	PHONE: {
		id: 'phone',
		title: 'Phone'
	},

	WEBSITE: {
		id: 'website',
		title: 'Website'
	},

	MESSAGE: {
		id: 'message',
		title: 'Type your message here...'
	},

	COUNTRY: {
		id: 'country',
		title: 'Country',
		options: CountryCodes
	},

	ADDRESS: {
		id: 'address',
		title: 'Address'
	},

	POSTCODE: {
		id: 'postcode',
		title: 'Postcode / ZIP'
	}
}

ContactModel.LIST = [
	ContactModel.FIRST_NAME,
	ContactModel.LAST_NAME,
	ContactModel.COMPANY_NAME,
	ContactModel.EMAIL,
	ContactModel.PHONE,
	ContactModel.WEBSITE,
	ContactModel.MESSAGE,
	ContactModel.COUNTRY,
	ContactModel.ADDRESS,
	ContactModel.POSTCODE,
]

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
