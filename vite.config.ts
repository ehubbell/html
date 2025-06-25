import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runSize } from 'vite-plugin-size';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		sourcemap: mode === 'development',
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			name: 'HTML',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'react/jsx-runtime',
				},
			},
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [runCommand('npm run build:ts'), runSize('dist')],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
			components: path.resolve(__dirname, '/src/components'),
			styles: path.resolve(__dirname, '/src/styles'),
			types: path.resolve(__dirname, '/src/types'),
			utils: path.resolve(__dirname, '/src/utils'),
		},
	},
}));
