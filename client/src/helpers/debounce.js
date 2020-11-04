export const throttle = (func, limit, ...args) => {
	let lastFunc;
	let lastRun;

	return () => {
		const context = this;
		if (!lastRun) {
			func.apply(context, args);
			lastRun = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(() => {
				if ((Date.now() - lastRun) >= limit) {
					func.apply(context, args);
					lastRun = Date.now();
				}
			}, limit - (Date.now() - lastRun));
		}
	};
}
