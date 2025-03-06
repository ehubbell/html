import { LibType } from 'types';
import { classBuilder } from 'utils';

export const Article = ({
	name = 'Article',
	tailwind,
	className,
	...props
}: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <article data-name={name} className={classes} {...props} />;
};

export const Aside = ({ name = 'Aside', tailwind, className, ...props }: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <aside data-name={name} className={classes} {...props} />;
};

export const Blockquote = ({
	name = 'Blockquote',
	tailwind,
	className,
	...props
}: React.HTMLProps<HTMLQuoteElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <blockquote data-name={name} className={classes} {...props} />;
};

export const Caption = ({
	name = 'Caption',
	tailwind,
	className,
	...props
}: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <caption data-name={name} className={classes} {...props} />;
};

export const Figure = ({ name = 'Figure', tailwind, className, ...props }: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <figure data-name={name} className={classes} {...props} />;
};
