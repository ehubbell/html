import { A, H2, P, Span, TailwindProps } from '@ehubbell/html';

export const Link = ({
	title,
	text,
	href,
	target,
	tailwind,
}: {
	title: string;
	text: string;
	href: string;
	target: string;
	tailwind?: TailwindProps & any;
}) => {
	const base = {
		animation: 'transition-colors',
		group: 'group',
		border: 'border',
		borderColor: 'border-transparent',
		borderRadius: '',
		hover: 'hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30',
		spacing: 'px-5 py-4',
	};
	const formattedTailwind = { ...base, ...tailwind?.a };

	// Render
	return (
		<A href={href} tailwind={formattedTailwind} target={target} rel='noopener noreferrer'>
			{title && (
				<H2
					tailwind={{
						spacing: 'mb-3',
						fontSize: 'text-2xl',
						fontWeight: 'font-semibold',
						...tailwind?.h2,
					}}>
					{title}
					<Span
						tailwind={{
							animation: 'transition-transform',
							spacing: 'pl-1',
							display: 'inline-block',
							hover: 'group-hover:translate-x-1 motion-reduce:transform-none',
							...tailwind?.span,
						}}>
						-&gt;
					</Span>
				</H2>
			)}
			{text && (
				<P
					tailwind={{
						spacing: 'm-0',
						width: 'max-w-[30ch]',
						fontSize: 'text-sm',
						opacity: 'opacity-50',
						...tailwind?.p,
					}}>
					{text}
				</P>
			)}
		</A>
	);
};
