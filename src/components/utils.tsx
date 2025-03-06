import { LibType } from 'types';
import { classBuilder } from 'utils';

export const Code = ({ name = 'Code', tailwind, className, ...props }: React.HTMLProps<HTMLElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <code data-name={name} className={classes} {...props} />;
};

export const Iframe = ({
	name = 'Iframe',
	tailwind,
	className,
	...props
}: React.HTMLProps<HTMLIFrameElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <iframe data-name={name} className={classes} {...props} />;
};

export const Img = ({ name = 'Img', tailwind, className, ...props }: React.HTMLProps<HTMLImageElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <img data-name={name} className={classes} {...props} />;
};

export const Hr = ({ name = 'Hr', tailwind, className, ...props }: React.HTMLProps<HTMLHRElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <hr data-name={name} className={classes} {...props} />;
};

export const Pre = ({ name = 'Pre', tailwind, className, ...props }: React.HTMLProps<HTMLPreElement> & LibType) => {
	const classes = classBuilder({ ...tailwind, className });

	return <pre data-name={name} className={classes} {...props} />;
};
