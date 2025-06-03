export type TailwindProps = TailwindContainerProps &
	TailwindGridProps &
	TailwindColProps & {
		align?: string;
		animation?: string;
		aspect?: string;
		bgClip?: string;
		bgColor?: string;
		bgImage?: string;
		bgPosition?: string;
		bgOpacity?: string;
		bgSize?: string;
		border?: string;
		borderColor?: string;
		borderOpacity?: string;
		borderRadius?: string;
		borderStyle?: string;
		cols?: string;
		color?: string;
		cursor?: string;
		display?: string;
		divide?: string;
		divideColor?: string;
		divideOpacity?: string;
		duration?: string;
		fade?: string;
		focus?: string;
		fontFamily?: TailwindFontFamilyOpts;
		fontSize?: string;
		fontStyle?: string;
		fontWeight?: string;
		fontVariant?: string;
		flex?: string;
		grid?: string;
		gridFlow?: string;
		group?: string;
		height?: string;
		hover?: string;
		inset?: string;
		leading?: string;
		lineClamp?: string;
		listImg?: string;
		listPosition?: string;
		listStyle?: string;
		location?: string;
		margin?: string;
		maxHeight?: string;
		minHeight?: string;
		opacity?: string;
		order?: string;
		origin?: string;
		outline?: string;
		outlineColor?: string;
		outlineOffset?: string;
		overflow?: string;
		padding?: string;
		placeholderColor?: string;
		position?: string;
		ring?: string;
		ringColor?: string;
		ringOffset?: string;
		ringOffsetColor?: string;
		rotate?: string;
		scale?: string;
		shadow?: string;
		shadowColor?: string;
		size?: string;
		space?: string;
		spacing?: string;
		textDecoration?: string;
		textTransform?: string;
		tracking?: string;
		transform?: string;
		transition?: string;
		translate?: string;
		weight?: TailwindFontWeightOpts;
		whiteSpace?: string;
		width?: string;
		zIndex?: string;
	};

export type TailwindContainerProps = {
	size?: string;
	center?: boolean;
	gutters?: boolean;
};

export type TailwindGridProps = {
	cols?: string;
	rows?: string;
	flow?: string;
	gap?: string;
};

export type TailwindColProps = {
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
	xxl?: string;
	span?: string;
	order?: string;
};

export type TailwindFontFamilyOpts = string | 'font-primary' | 'font-secondary' | 'font-accent';

export type TailwindFontSizeOpts =
	| string
	| 'text-xs'
	| 'text-sm'
	| 'text-base'
	| 'text-lg'
	| 'text-xl'
	| 'text-2xl'
	| 'text-3xl'
	| 'text-4xl'
	| 'text-5xl'
	| 'text-6xl';

export type TailwindFontWeightOpts =
	| string
	| 'font-light'
	| 'font-normal'
	| 'fontracking-normal'
	| 'font-medium'
	| 'font-semiBold'
	| 'font-bold';

export type TailwindPlacementOpts = string | 'left' | 'right';

// Docs
// https://v3.tailwindcss.com/docs/theme#configuration-reference
