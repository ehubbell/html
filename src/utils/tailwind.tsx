import { isArray, isEmpty, isObject } from 'utils/helpers';

export const classBuilder = props => {
	let classes = '';
	Object.keys(props)
		.filter((key, i, s) => s.indexOf(key) === i)
		.map(key => {
			const data = props[key];
			if (isArray(data)) return;
			if (isObject(data)) return;
			if (isEmpty(data)) return;
			classes = classes.concat(data + ' ');
		});
	return classes;
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
