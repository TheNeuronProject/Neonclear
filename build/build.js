/* global env */
console.log('[RD]', 'Build starting...')

require('shelljs/global')
if (env.BUILD_ENV !== 'DEMO') env.NODE_ENV = 'production'

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
	bundle.write({ dest, moduleName, format, sourceMap: env.BUILD_ENV === 'DEMO' || env.BUILD_ENV === 'CI' ? sourceMap : false })
})
.then(() => console.log('[RD]', 'Build successful!'))
