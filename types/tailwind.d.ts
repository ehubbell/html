export type TailwindProps = TailwindContainerProps &
	TailwindGridProps &
	TailwindColProps & {
		align?: string;
		alignContent?: string;
		alignItems?: string;
		alignSelf?: string;
		animation?: string;
		appearance?: string;
		aspect?: string;
		autoCols?: string;
		autoRows?: string;
		basis?: string;
		bgAttachment?: string;
		bgBlur?: string;
		bgClip?: string;
		bgColor?: string;
		bgImage?: string;
		bgOrigin?: string;
		bgPosition?: string;
		bgOpacity?: string;
		bgRepeat?: string;
		bgSize?: string;
		border?: string;
		borderCollapse?: string;
		borderColor?: string;
		borderOpacity?: string;
		borderRadius?: string;
		borderSpacing?: string;
		borderStyle?: string;
		borderWidth?: string;
		bottom?: string;
		cols?: string;
		columns?: string;
		color?: string;
		cursor?: string;
		display?: string;
		divide?: string;
		divideColor?: string;
		divideOpacity?: string;
		divideStyle?: string;
		divideWidth?: string;
		duration?: string;
		fade?: string;
		fill?: string;
		focus?: string;
		forcedColorAdjust?: string;
		fontFamily?: TailwindFontFamilyOpts;
		fontSize?: string;
		fontStyle?: string;
		fontWeight?: string;
		fontVariant?: string;
		flex?: string;
		flexDirection?: string;
		flexWrap?: string;
		grid?: string;
		gridColumn?: string;
		gridCols?: string;
		gridFlow?: string;
		gridRow?: string;
		gridRows?: string;
		group?: string;
		grow?: string;
		height?: string;
		hover?: string;
		inset?: string;
		items?: string;
		justify?: string;
		justifyContent?: string;
		justifyItems?: string;
		justifySelf?: string;
		leading?: string;
		left?: string;
		lineClamp?: string;
		listImg?: string;
		listPosition?: string;
		listStyle?: string;
		location?: string;
		margin?: string;
		maxHeight?: string;
		maxWidth?: string;
		minHeight?: string;
		minWidth?: string;
		objectFit?: string;
		objectPosition?: string;
		opacity?: string;
		order?: string;
		origin?: string;
		outline?: string;
		outlineColor?: string;
		outlineOffset?: string;
		outlineStyle?: string;
		outlineWidth?: string;
		overflow?: string;
		overflowWrap?: string;
		padding?: string;
		path?: string;
		placeContent?: string;
		placeItems?: string;
		placeSelf?: string;
		placeholderColor?: string;
		pointerEvents?: string;
		position?: string;
		resize?: string;
		ring?: string;
		ringColor?: string;
		ringOffset?: string;
		ringOffsetColor?: string;
		right?: string;
		rotate?: string;
		scale?: string;
		shadow?: string;
		shadowColor?: string;
		shrink?: string;
		size?: string;
		space?: string;
		spacing?: string;
		stroke?: string;
		strokeWidth?: string;
		tableLayout?: string;
		textAlign?: string;
		textColor?: string;
		textDecoration?: string;
		textOverflow?: string;
		textTransform?: string;
		textWrap?: string;
		top?: string;
		tracking?: string;
		transform?: string;
		transition?: string;
		translate?: string;
		touchAction?: string;
		userSelect?: string;
		visibility?: string;
		weight?: TailwindFontWeightOpts;
		whitespace?: string;
		width?: string;
		willChange?: string;
		wordBreak?: string;
		zIndex?: string;
		variants?: string;
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
