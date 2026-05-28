import { filterProps, formatClassNames, formatProps } from '../src/utils/functions';

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
