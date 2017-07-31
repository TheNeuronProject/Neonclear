console.log('[RD]', 'Build starting...')

require('shelljs/global')
env.NODE_ENV = 'production'

const rollup = require('rollup').rollup
const {
	entry,
	bundle,
	proPath,
	format,
	moduleName,
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
	bundle.write({ dest, moduleName, format })
})
.then(() => console.log('[RD]', 'Build successful!'))
