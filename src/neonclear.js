// Version
import { version } from '../package.json'
// Normalize
import 'normalize.css'
// Import global style
import './global.css'
// Import utilities
import styled from './utils/styled.js'

// Add fonts
const fonts = ['Megrim', 'Abel', 'Material Icons']

const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
fontLink.href = `https://fonts.googleapis.com/css?family=${fonts.map(item => item.replace(/\s/g, '+')).join('|')}`
;(document.head || document.getElementsByTagName('head')[0]).appendChild(fontLink)

// Export ef
export * from 'ef.js'
// Export every module
export * from './components/body'
export * from './components/header'
export * from './components/footer'
export * from './components/text_logo'
export * from './components/banner_logo'
export * from './components/page'
export * from './components/logo_page'
export * from './components/drawer'
export * from './components/article'

// Export utilities
export { styled }

// Log style
const ls = `
color: #b200fb;
`
if (ENV !== 'production') console.log('%c[NEON]', ls, `Neonclear v${version} loaded!`)


// DEMO_BUILD_UNCOMMENT import './demo/demo.js'
