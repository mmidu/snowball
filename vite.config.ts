import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			src: path.resolve('src/')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/globals";`
			}
		}
	},
	test: {
		// Jest like globals
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.ts'],
		// Extend jest-dom matchers
		setupFiles: ['./setupTest.js']
	}
};
export default config;
