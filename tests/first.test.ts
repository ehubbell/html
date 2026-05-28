import { Article, Button, Div } from '../src/index';
import { filterProps, formatClassNames, formatElementProps, formatProps } from '../src/utils/functions';

describe('formatClassNames', () => {
	it('includes className and allowed tailwind keys', () => {
		const result = formatClassNames(
			{
				bgColor: 'bg-blue-500',
				display: 'flex',
				spacing: 'px-3 py-2',
			},
			'btn-primary',
		);

		expect(result).toEqual('bg-blue-500 flex px-3 py-2 btn-primary ');
	});

	it('supports the existing one-object call shape', () => {
		const result = formatClassNames({
			className: 'btn-primary',
			color: 'text-white',
			hover: 'hover:bg-blue-600',
		});

		expect(result).toEqual('btn-primary text-white hover:bg-blue-600 ');
	});

	it('includes arbitrary tailwind variants', () => {
		const variants =
			'hover:bg-slate-50 focus-visible:ring-2 aria-expanded:bg-slate-100 data-[state=open]:block [&>svg]:size-4';
		const result = formatClassNames({
			bgColor: 'bg-white',
			color: 'text-slate-900',
			variants,
		});

		expect(result).toEqual(`bg-white text-slate-900 ${variants} `);
	});

	it('ignores unknown keys and non-string values', () => {
		const result = formatClassNames({
			bgColor: 'bg-blue-500',
			center: true,
			color: '',
			display: ['flex'],
			hover: () => 'hover:bg-blue-600',
			spacing: {},
			unknown: 'ignore-me',
			width: 'undefined',
		});

		expect(result).toEqual('bg-blue-500 ');
	});
});

describe('formatProps', () => {
	it('removes tailwind-only keys and keeps DOM props', () => {
		const onClick = jest.fn();
		const result = formatProps({
			'aria-label': 'Submit',
			bgColor: 'bg-blue-500',
			className: 'btn',
			'data-id': '123',
			disabled: true,
			onClick,
			spacing: 'px-3',
			variants: 'hover:bg-slate-50 data-[state=open]:block',
			whitespace: 'whitespace-nowrap',
		});

		expect(result).toEqual({
			'aria-label': 'Submit',
			className: 'btn',
			'data-id': '123',
			disabled: true,
			onClick,
		});
	});
});

describe('formatElementProps', () => {
	it('rolls up top-level tailwind props, tailwind overrides, and className', () => {
		const onClick = jest.fn();
		const style = { opacity: 1 };
		const result = formatElementProps(
			{
				'aria-label': 'Open',
				bgColor: 'bg-red-500',
				className: 'props-class',
				'data-id': 'panel',
				disabled: true,
				id: 'panel',
				onClick,
				spacing: 'p-2',
				style,
			},
			{
				bgColor: 'bg-blue-500',
				variants: 'hover:bg-blue-600 data-[state=open]:block',
			},
			'custom-class',
		);

		expect(result.className).toEqual(
			'bg-blue-500 props-class p-2 hover:bg-blue-600 data-[state=open]:block custom-class ',
		);
		expect(result.props).toEqual({
			'aria-label': 'Open',
			'data-id': 'panel',
			disabled: true,
			id: 'panel',
			onClick,
			style,
		});
	});
});

describe('filterProps', () => {
	it('keeps only included attrs', () => {
		const result = filterProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);

		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('removes excluded attrs', () => {
		const result = filterProps({ a: 1, b: 2, c: 3 }, ['b'], false);

		expect(result).toEqual({ a: 1, c: 3 });
	});
});

describe('html primitives', () => {
	it('filters tailwind props from Div and rolls them into className', () => {
		const onClick = jest.fn();
		const element = Div({
			bgColor: 'bg-red-500',
			children: 'Hello',
			className: 'custom',
			'data-id': 'panel',
			id: 'panel',
			name: 'Panel',
			onClick,
			spacing: 'p-2',
			tailwind: {
				bgColor: 'bg-blue-500',
				variants: 'hover:bg-blue-600',
			},
		} as any);

		expect(element.type).toEqual('div');
		expect(element.props).toMatchObject({
			'data-id': 'panel',
			'data-name': 'Panel',
			children: 'Hello',
			className: 'bg-blue-500 p-2 hover:bg-blue-600 custom ',
			id: 'panel',
			onClick,
		});
		expect(element.props.bgColor).toBeUndefined();
		expect(element.props.spacing).toBeUndefined();
		expect(element.props.tailwind).toBeUndefined();
		expect(element.props.variants).toBeUndefined();
	});

	it('filters tailwind props from Article while preserving normal props', () => {
		const element = Article({
			'aria-label': 'Story',
			children: 'Article body',
			display: 'block',
			id: 'story',
			tailwind: {
				whitespace: 'whitespace-pre-wrap',
			},
		} as any);

		expect(element.type).toEqual('article');
		expect(element.props).toMatchObject({
			'aria-label': 'Story',
			'data-name': 'Article',
			children: 'Article body',
			className: 'block whitespace-pre-wrap ',
			id: 'story',
		});
		expect(element.props.display).toBeUndefined();
		expect(element.props.whitespace).toBeUndefined();
	});

	it('filters tailwind props from Button while preserving button props', () => {
		const element = Button({
			children: 'Save',
			disabled: true,
			type: 'submit',
			width: 'w-full',
		} as any);

		expect(element.type).toEqual('button');
		expect(element.props).toMatchObject({
			'data-name': 'Button',
			children: 'Save',
			className: 'w-full ',
			disabled: true,
			type: 'submit',
		});
		expect(element.props.width).toBeUndefined();
	});
});
