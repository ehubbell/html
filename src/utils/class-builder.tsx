import { isEmpty, isObject } from 'utils/helpers';

export const formatProps = (props, name?) => {
	const formattedProps = props;
	const active = props.active || {};
	Object.keys(active).map(key => (formattedProps[key] = active[key]));
	return formattedProps;
};

export const classBuilder = (props, name?) => {
	let classes = '';
	const formattedProps = formatProps(props, name);
	Object.keys(formattedProps)
		.filter((key, i, s) => s.indexOf(key) === i)
		.filter(key => key !== 'type')
		.map(key => {
			const value = formattedProps[key];
			if (isObject(value)) return;
			if (isEmpty(value)) return;
			classes = classes.concat(value + ' ');
		});
	return classes;
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
