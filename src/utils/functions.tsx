import { isArray, isEmpty, isObject } from 'src/utils/helpers';
import { tailwindProps } from 'src/utils/tailwind';

export const computeClasses = props => {
	let classes = '';

	Object.keys(props)
		.filter((key, i, s) => s.indexOf(key) === i)
		// .filter(key => Object.keys({ ...tailwindProps, className: '' }).includes(key))
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

export const computeProps = props => {
	const computed: any = {};
	Object.keys(props)
		.filter((key, i, s) => s.indexOf(key) === i)
		.filter(key => !Object.keys(tailwindProps).includes(key))
		.map(key => {
			const data = props[key];
			return (computed[key] = data);
		});
	return computed;
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
