import { TABLET_REGEX, MOBILE_REGEX } from '@/helpers/regex';

export const getViewPortDimensions = () => {
	const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

	return {
		width,
		height,
	}
}

export const getBrowser = () => {
	let browser
	console.log(navigator.userAgent)
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
		browser = 'opera'
	} else if (navigator.userAgent.indexOf("Chrome") != -1) {
		browser = 'chrome'
	} else if (navigator.userAgent.indexOf("Safari") != -1) {
		browser = 'safari'
	} else if (navigator.userAgent.indexOf("Firefox") != -1) {
		browser = 'firefox'
	} else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
	{
		browser = 'ie'
	}

	return browser
}

export const getOrientation = () => {
	const { height, width } = getViewPortDimensions()
	return height > width ? 'portrait' : 'landscape'
}

export const getDeviceType = () => {
	const ua = navigator.userAgent;
	if (TABLET_REGEX.test(ua)) { return 'tablet'; }
	if (MOBILE_REGEX.test(ua)) { return 'mobile'; }
	return 'desktop';
}

export const getBrowserInfo = () => {
	const dimensions = getViewPortDimensions()
	const browser = getBrowser()
	const orientation = getOrientation()
	const deviceType = getDeviceType()

	return {
		dimensions,
		browser,
		orientation,
		deviceType,
	}
}
