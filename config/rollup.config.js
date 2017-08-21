const path = require('path')

// Rollup plugins
const buble = require('rollup-plugin-buble')
const eslint = require('rollup-plugin-eslint')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const uglify = require('rollup-plugin-uglify')
const progress = require('rollup-plugin-progress')
const json = require('rollup-plugin-json')
const eft = require('rollup-plugin-eft')
const postcss = require('rollup-plugin-postcss')

// Postcss plugins
const postcssModules = require('postcss-modules')
const simplevars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const postcssimport = require('postcss-import')
const cssnano = require('cssnano')
const imageInliner = require('postcss-image-inliner')

// CSS variables
const colors = require('./colors.config.js')

// ef configuration
const {
	entry = 'src/main.js',
	bundle = 'bundle.js',
	assets = 'src/assets',
	devPath = 'test',
	proPath = 'dist',
	limit = 10240,
	b64svg = false,
	format = 'iife',
	sourceMap = 'inline',
	moduleName = 'bundle',
	extract = false,
	combineStyleTags = false
} = require('./ef.config.js')

// Log build environment
switch (process.env.BUILD_ENV) {
	case 'DEMO': {
		console.log(`
+------------+
| DEMO BUILD |
+------------+
`)
		break
	}
	case 'CI': {
		console.log(`
+----------+
| CI BUILD |
+----------+
`)
		break
	}
	default: {
		console.log(`
+--------------+
| NORMAL BUILD |
+--------------+
`)
	}
}

const cssExportMap = {}

module.exports = {
	entry,
	bundle: path.normalize(bundle),
	devPath: path.normalize(devPath),
	proPath: path.normalize(proPath),
	limit,
	format,
	sourceMap,
	moduleName,
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
				imageInliner({
					assetPaths: [assets],
					maxFileSize: limit,
					b64svg
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
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
			'// DEMO_BUILD_UNCOMMENT ': process.env.BUILD_ENV === 'DEMO' ? '' : '// '
		}),
		buble({
			transforms: {
				modules: false,
				dangerousForOf: true
			},
			objedtAssign: 'Object.assign'
		}),
		(process.env.NODE_ENV === 'production' && uglify())
	]
}
