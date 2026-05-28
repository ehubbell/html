/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
		'^types$': '<rootDir>/types',
		'^types/(.*)$': '<rootDir>/types/$1',
	},
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: {
					baseUrl: '.',
					esModuleInterop: true,
					jsx: 'react-jsx',
					module: 'CommonJS',
					target: 'ES2020',
				},
			},
		],
	},
};
