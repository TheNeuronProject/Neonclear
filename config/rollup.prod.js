// Import base config
import base from './rollup.base'

const {input, name, plugins, proPath, bundle} = base

const config = {
	input,
	output: [
		{
			name,
			file: `${proPath}/${bundle}.full.js`,
			format: 'umd',
			sourcemap: true
		},
		{
			name,
			file: `${proPath}/${bundle}.js`,
			format: 'iife',
			sourcemap: true
		},
		{
			name,
			file: `${proPath}/${bundle}.common.js`,
			format: 'cjs',
			sourcemap: true
		}
	],
	plugins,
	external: ['ef-core'],
	globals: {
		'ef-core': 'efCore'
	}
}

export default config
