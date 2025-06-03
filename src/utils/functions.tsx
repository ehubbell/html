import { isArray, isEmpty, isObject } from 'utils/helpers';
import { tailwindProps } from 'utils/tailwind';

export const classBuilder = props => {
	let classes = '';

	Object.keys(props)
		// .sort((a, b) => (a < b ? -1 : 1))
		.filter((key, i, s) => s.indexOf(key) === i)
		.filter(key => Object.keys(tailwindProps).includes(key))
		.map(key => {
			const data = props[key];
			if (isArray(data)) return;
			if (isObject(data)) return;
			if (isEmpty(data)) return;
			classes = classes.concat(data + ' ');
		});
	return classes;
};

export const propsFilter = props => {
	let computed: any = {};
	Object.keys(props)
		.filter((key, i, s) => s.indexOf(key) === i)
		.filter(key => !Object.keys(tailwindProps).includes(key))
		.map(key => {
			const data = props[key];
			return (computed = computed[key] = data);
		});
	return computed;
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
