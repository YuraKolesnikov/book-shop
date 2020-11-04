/* Сюда же пойдут функции из пункта 9 helpers.txt - любое форматирование, фильтры */

export const getTypeOf = variable => {
	if (typeof variable != 'number') {
		const result = ({}).toString.call(variable).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
		return result == 'uint'
			? 'buffer'
			: result

	} else {
		return isNaN(variable) ? 'nan' : 'number'
	}
}
