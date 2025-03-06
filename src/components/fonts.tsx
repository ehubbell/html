import { LibType } from 'types';
import { classBuilder } from 'utils';

export const H1 = ({ name = 'H1', tailwind, className, ...props }: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <h1 data-name={name} className={classes} {...props} />;
};

export const H2 = ({ name = 'H2', tailwind, className, ...props }: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <h2 data-name={name} className={classes} {...props} />;
};

export const H3 = ({ name = 'H3', tailwind, className, ...props }: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <h3 data-name={name} className={classes} {...props} />;
};

export const H4 = ({ name = 'H4', tailwind, className, ...props }: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <h4 data-name={name} className={classes} {...props} />;
};

export const H5 = ({ name = 'H5', tailwind, className, ...props }: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <h5 data-name={name} className={classes} {...props} />;
};

export const H6 = ({ name = 'H6', tailwind, className, ...props }: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <h6 data-name={name} className={classes} {...props} />;
};

export const P = ({ name = 'P', tailwind, className, ...props }: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <p data-name={name} className={classes} {...props} />;
};

export const Small = ({
	name = 'Small',
	tailwind,
	className,
	...props
}: React.HTMLProps<HTMLHeadingElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <small data-name={name} className={classes} {...props} />;
};
