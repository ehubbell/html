import { tailwindKeys } from 'src/utils/keys';

const tailwindKeySet = new Set(Object.keys(tailwindKeys));
const classNameKeySet = new Set([...tailwindKeySet, 'className']);

export const filterProps = (data = {}, attrs = [], include = true) => {
	const formattedData = {};
	const attrSet = new Set(attrs);

	for (const key in data) {
		if (include ? attrSet.has(key) : !attrSet.has(key)) {
			formattedData[key] = data[key];
		}
	}

	return formattedData;
};

export const formatProps = (props = {}) => {
	const formattedData = {};

	for (const key in props) {
		if (!tailwindKeySet.has(key)) {
			formattedData[key] = props[key];
		}
	}

	return formattedData;
};

export const formatClassNames = (props = {}, className = '') => {
	let classes = '';

	for (const key in props) {
		if (
			classNameKeySet.has(key) &&
			typeof props[key] === 'string' &&
			props[key].length > 0 &&
			props[key] !== 'undefined'
		) {
			classes += props[key] + ' ';
		}
	}

	if (typeof className === 'string' && className.length > 0 && className !== 'undefined') {
		classes += className + ' ';
	}

	return classes;
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
