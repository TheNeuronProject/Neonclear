// Import basic elements
import {
	inform, exec, Body, Header,
	TextLogo, BannerLogo, Button,
	LogoPage, Footer
} from '../neonclear.js'

import style from './style.css'

inform()
const body = new Body()
const header = new Header()
const logo = new TextLogo()
const BL = new BannerLogo()
const buttonSoon = new Button({$data: {caption: 'Coming Soon...'}})
const buttonGH = new Button({
	$data: {
		caption: 'View in GitHub'
	},
	$methods: {
		click: function() {
			window.open('https://github.com/TheNeuronProject/Neonclear')
		}
	}
})
const LP = new LogoPage({
	$data: {
		caption: 'The ef.js based progressive UI framework',
		class: {
			names: style.demo
		}
	},
	logo: BL,
	buttons: [buttonSoon, buttonGH]
})
const footer = new Footer({$data: {author: 'Yukino Song'}})
body.contents.push(header, LP, footer)
header.left.push(logo)
body.$mount({target: document.body, option: 'replace'})
exec()

const ls = `
color: #0ddf79;
`
console.warn('%c[NEON]', ls, 'This is a DEMO build of Neonclear. Additional logics are included in this bundle. DO NOT use this build in your project.')
