// Import base config
import base from './rollup.base'

const {input, name, plugins, proPath, bundle} = base

const config = {
	input,
	output: {
		name,
		file: `${proPath}/${bundle}.js`,
		format: 'umd',
		sourcemap: true,
		globals: {
			'ef-core': 'ef'
		}
	},
	plugins,
	external: ['ef-core']
}

// Load demo script
if (process.env.BUILD_ENV === 'DEMO') {
	config.input = 'src/demo/loader.js'
	config.external.push('neonclear')
	config.output.globals.neonclear = 'neon'
}

delete base.bundle
delete base.devPath
delete base.proPath

export default config
