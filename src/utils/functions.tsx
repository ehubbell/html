import { tailwindKeys } from 'src/utils/keys';

const tailwindKeySet = new Set(Object.keys(tailwindKeys));
const classNameKeySet = new Set([...tailwindKeySet, 'className']);
const hasOwn = Object.prototype.hasOwnProperty;

const isClassName = value => typeof value === 'string' && value.length > 0 && value !== 'undefined';

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
		if (classNameKeySet.has(key) && isClassName(props[key])) {
			classes += props[key] + ' ';
		}
	}

	if (isClassName(className)) {
		classes += className + ' ';
	}

	return classes;
};

export const formatElementProps = (props = {}, tailwind = {}, className = '') => {
	const formattedProps = {};
	const hasTailwindProps = tailwind && typeof tailwind === 'object';
	let classes = '';

	for (const key in props) {
		if (key === 'className') {
			if (isClassName(props[key])) {
				classes += props[key] + ' ';
			}
		} else if (tailwindKeySet.has(key)) {
			const value = hasTailwindProps && hasOwn.call(tailwind, key) ? tailwind[key] : props[key];

			if (isClassName(value)) {
				classes += value + ' ';
			}
		} else {
			formattedProps[key] = props[key];
		}
	}

	if (hasTailwindProps) {
		for (const key in tailwind) {
			if (tailwindKeySet.has(key) && !hasOwn.call(props, key) && isClassName(tailwind[key])) {
				classes += tailwind[key] + ' ';
			}
		}
	}

	if (isClassName(className)) {
		classes += className + ' ';
	}

	return {
		className: classes,
		props: formattedProps,
	};
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
