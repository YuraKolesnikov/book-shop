import { getTypeOf } from '@/helpers/data';

function clearField(obj, field) {
	const type = getTypeOf(obj[field])

	if (type == 'null' || type == 'undefined') {
		obj[field] = null
	} else if (type === 'map') {
		obj[field] = new Map()
	} else if (type === 'set') {
		obj[field] = new Set()
	} else if (type === 'object') {
		clearObject(obj[field])
	} else if (type === 'number') {
		obj[field] = 0
	} else if (type === 'boolean') {
		obj[field] = false
	} else {
		obj[field] = ''
	}
}

export const clearObject = obj => {
	Object.keys(obj).forEach(key => clearField(obj, key))
}

export const clearObjectField = (obj, field) => clearField(obj, field)

export const findInObject = ({ obj, key, val }) => {
	console.log(obj, { key, val })
}
