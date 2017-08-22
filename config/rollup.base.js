import path from 'path'
import chalk from 'chalk'

// Rollup plugins
import buble from 'rollup-plugin-buble'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import progress from 'rollup-plugin-progress'
import json from 'rollup-plugin-json'
import eft from 'rollup-plugin-eft'
import postcss from 'rollup-plugin-postcss'

// Postcss plugins
import postcssModules from 'postcss-modules'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import postcssimport from 'postcss-import'
import cssnano from 'cssnano'

// CSS variables
import colors from './colors.config.js'

// ef configuration
import efConfig from './ef.config.js'
const {
	input,
	output,
	bundle,
	devPath,
	proPath,
	extract,
	combineStyleTags
} = efConfig

console.log('Target:', chalk.bold.green(process.env.NODE_ENV || 'development'))
// Log build environment
switch (process.env.BUILD_ENV) {
	case 'DEMO': {
		console.log(chalk.bgCyan.black(`
+------------+
| DEMO BUILD |
+------------+
`))
		break
	}
	case 'CI': {
		console.log(chalk.bgGreen.black(`
+----------+
| CI BUILD |
+----------+
`))
		break
	}
	default: {
		console.log(chalk.bgYellow.black(`
+--------------+
| NORMAL BUILD |
+--------------+
`))
	}
}

const cssExportMap = {}

export default {
	input,
	output,
	bundle: path.normalize(bundle),
	devPath: path.normalize(devPath),
	proPath: path.normalize(proPath),
	plugins: [
		progress({
			clearLine: false
		}),
		eslint(),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs(),
		json(),
		eft(),
		postcss({
			plugins: [
				simplevars({ variables: colors }),
				nested(),
				cssnext({ warnForDuplicates: false }),
				postcssimport(),
				postcssModules({
					getJSON(id, exportTokens) {
						cssExportMap[id] = exportTokens
					}
				}),
				cssnano()
			],
			getExport(id) {
				return cssExportMap[id]
			},
			extract,
			combineStyleTags
		}),
		replace({
			ENV: `'${process.env.NODE_ENV || 'development'}'`,
			'// DEMO_BUILD_UNCOMMENT ': process.env.BUILD_ENV === 'DEMO' ? '' : '// '
		}),
		buble({
			transforms: {
				modules: false,
				dangerousForOf: true
			},
			objectAssign: 'Object.assign'
		}),
		(process.env.NODE_ENV === 'production' && uglify())
	]
}
