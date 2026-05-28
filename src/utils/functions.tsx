import { isArray, isEmpty, isObject } from 'src/utils/helpers';
import { tailwindKeys } from 'src/utils/keys';

export const filterProps = (data, attrs = [], include = true) => {
	const formattedData = {};
	Object.keys(data)
		.filter(key => (include ? attrs.includes(key) : !attrs.includes(key)))
		.map(key => (formattedData[key] = data[key]));
	return formattedData;
};

export const formatProps = props => {
	const formattedData = {};
	Object.keys(props)
		.filter((key, i, s) => s.indexOf(key) === i)
		.filter(key => !Object.keys(tailwindKeys).includes(key))
		.map(key => (formattedData[key] = props[key]));
	return formattedData;
};

export const formatClassNames = props => {
	let classes = '';
	const keys = Object.keys(tailwindKeys);

	Object.keys(props)
		.filter((key, i, s) => s.indexOf(key) === i)
		.filter(key => [...keys, 'className'].includes(key))
		.map(key => {
			const data = props[key];
			if (isArray(data)) return;
			if (isObject(data)) return;
			if (isEmpty(data)) return;
			if (typeof data === 'function') return;
			classes = classes.concat(data + ' ');
		});
	return classes;
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
