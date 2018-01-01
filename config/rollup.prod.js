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
			'ef-core': 'efCore'
		}
	},
	plugins,
	external: ['ef-core']
}

// Load demo script
if (process.env.BUILD_ENV === 'DEMO') config.input = 'src/demo/loader.js'

delete base.bundle
delete base.devPath
delete base.proPath

export default config
