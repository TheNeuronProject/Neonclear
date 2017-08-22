export default {
	input: 'src/neonclear.js',
	output: {
		name: 'neon',
		format: 'umd',
		sourcemap: true
	},
	bundle: 'neonclear.js',
	devPath: 'test',
	proPath: 'dist',
	extract: false,
	combineStyleTags: true
}
