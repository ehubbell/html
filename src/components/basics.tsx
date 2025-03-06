import { LibType } from 'types';
import { classBuilder } from 'utils';

export const Html = ({ name = 'HTML', tailwind, className, ...props }: React.HTMLProps<HTMLHtmlElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <html data-name={name} className={classes} {...props} />;
};

export const Body = ({ name = 'Body', tailwind, className, ...props }: React.HTMLProps<HTMLBodyElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <body data-name={name} className={classes} {...props} />;
};

export const Footer = ({ name = 'Footer', tailwind, className, ...props }: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <footer data-name={name} className={classes} {...props} />;
};

export const Main = ({ name = 'Main', tailwind, className, ...props }: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <main data-name={name} className={classes} {...props} />;
};

export const Nav = ({ name = 'Nav', tailwind, className, ...props }: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <nav data-name={name} className={classes} {...props} />;
};

export const Section = ({
	name = 'Section',
	tailwind,
	className,
	...props
}: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <section data-name={name} className={classes} {...props} />;
};

export const Div = ({ name = 'Div', tailwind, className, ...props }: React.HTMLProps<HTMLDivElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <div data-name={name} className={classes} {...props} />;
};

export const Span = ({ name = 'Span', tailwind, className, ...props }: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <span data-name={name} className={classes} {...props} />;
};

export const Ul = ({ name = 'Ul', tailwind, className, ...props }: React.HTMLProps<HTMLUListElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <ul data-name={name} className={classes} {...props} />;
};

export const Li = ({ name = 'Li', tailwind, className, ...props }: React.HTMLProps<HTMLLIElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <li data-name={name} className={classes} {...props} />;
};
