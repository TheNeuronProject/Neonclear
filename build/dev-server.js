console.log('[RD]', 'Build starting...')

require('shelljs/global')
env.BUILD_ENV = 'DEMO'

const rollup = require('rollup').rollup
const watch = require('node-watch')
const {
	moduleName,
	entry,
	bundle,
	devPath,
	format,
	sourceMap,
	plugins
} = require('../config/rollup.config')
const browserSync = require('browser-sync').create()
const bsConfig = require('../config/bs-config')
const reload = browserSync.reload

const dest = `${devPath}/${bundle}`

let cache = {}
let buildID = 0

const bundleWrite = (bundle) => {
	console.log('[RD]', 'Writing bundle...')
	cache = bundle
	bundle.write({ dest, moduleName, format, sourceMap })
}

const rebuild = () => {
	buildID = 0
	rollup({
		entry,
		plugins,
		cache
	})
	.then(bundleWrite)
	.then(reload)
}

const startWatch = () => {
	watch('src', (evt, filename) => {
		console.log('[RD]', 'File changed:', filename)
		if (buildID) clearTimeout(buildID)
		buildID = setTimeout(rebuild, 200)
	})
}

console.log('[RD]', 'Building...')

rollup({
	entry,
	plugins
})
.then(bundleWrite)
.then(() => console.log('[RD]', 'Build successful! Starting server...'))
.then(() => browserSync.init(bsConfig))
.then(startWatch)
