// Version
import { version } from '../package.json'
// Normalize
import 'normalize.css'
// Import global style
import './global.css'

// Add fonts
const fonts = ['Megrim', 'PT Sans'].map(item => item.replace(/\s/g, '+'))

const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
fontLink.href = `https://fonts.googleapis.com/css?family=${fonts.join('|')}`
;(document.head || document.getElementsByTagName('head')[0]).appendChild(fontLink)

// Export ef
export * from 'ef.js'
// Export every module
export * from './modules/body'
export * from './modules/header'
export * from './modules/footer'
export * from './modules/text_logo'
export * from './modules/banner_logo'
export * from './modules/page'
export * from './modules/logo_page'
export * from './modules/button'

// Log style
const ls = `
color: #b200fb;
`
if (ENV !== 'production') console.log('%c[NEON]', ls, `Neonclear v${version} loaded!`)


// DEMO_BUILD_UNCOMMENT import './demo/demo.js'
