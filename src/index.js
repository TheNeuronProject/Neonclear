// Version
import { version } from '../package.json'
// Normalize
import 'normalize.css'
// Import global style
import './global.css'
// Export ef
export * from 'ef.js'
// Export every module
export * from './modules/body'
export * from './modules/header'
export * from './modules/text_logo'

// Log style
const ls = `
color: #b200fb;
`

if (ENV !== 'production') console.log('%c[NEON]', ls, `Neonclear v${version} loaded!`)
