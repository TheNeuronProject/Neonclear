/* global env */
console.log('[RD]', 'Build starting...')

require('shelljs/global')
if (!env.DEMO_BUILD) env.NODE_ENV = 'production'

if (env.DEMO_BUILD) console.log(`
+------------+
| DEMO BUILD |
+------------+
`)

if (env.CI_BUILD) console.log(`
+------------+
|  CI BUILD  |
+------------+
`)

const rollup = require('rollup').rollup
const {
	entry,
	bundle,
	proPath,
	format,
	moduleName,
	sourceMap,
	plugins
} = require('../config/rollup.config')

const dest = `${proPath}/${bundle}`

console.log('[RD]', 'Building...')

rollup({
	entry,
	plugins
})
.then((bundle) => {
	console.log('[RD]', 'Writing bundle...')
	bundle.write({ dest, moduleName, format, sourceMap: env.DEMO_BUILD || env.CI_BUILD ? sourceMap : false })
})
.then(() => console.log('[RD]', 'Build successful!'))
