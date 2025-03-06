export const isArray = data => {
	return Array.isArray(data);
};

export const isDate = data => {
	return isObject(data) && typeof data.getMonth === 'function';
};

export const isObject = data => {
	return data !== null && data && typeof data === 'object';
};

export const isString = data => {
	return typeof data === 'string';
};

export const isEmpty = data => {
	if (data === null || data === undefined || data === 'undefined') {
		return true;
	}
	if (isArray(data)) {
		return data.length === 0 ? true : false;
	}
	if (isObject(data)) {
		return Object.keys(data).length === 0 ? true : false;
	}
	return data.length === 0 ? true : false;
};
