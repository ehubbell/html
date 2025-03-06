import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig({
	base: './',
	plugins: [react()],
	build: {
		sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'HtmlElements',
			formats: ['es', 'cjs', 'umd', 'iife'],
			fileName: format => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
			plugins: [peerDepsExternal()],
		},
	},
});
