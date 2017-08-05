// Import basic elements
import {
	inform, exec, Body, Header, TextLogo, LogoButton,
	LogoPage, Footer, SidePanel, SidePanelSection, SidePanelItem
} from '../neonclear.js'

import Logo from './logo.ef'

import style from './style.css'

inform()
const body = new Body()
const header = new Header()
const logo = new TextLogo({
	$data: {
		class: style
	}
})
const BL = new Logo({
	$data: {
		class: style
	}
})
const buttonSoon = new LogoButton({$data: {caption: 'Coming Soon...'}})
const buttonGH = new LogoButton({
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
const SP = new SidePanel({
	contents: [
		new SidePanelSection({
			$data: {
				title: 'Intro'
			},
			items: [
				new SidePanelItem({
					$data: {
						title: 'ef.js'
					},
					$methods: {
						click() {
							window.open('https://ef.js.org')
						}
					}
				})
			]
		}),
		new SidePanelSection({
			$data: {
				title: 'Usage'
			}
		}),
		new SidePanelSection({
			$data: {
				title: 'Components'
			}
		}),
		new SidePanelSection({
			$data: {
				title: 'About'
			},
			items: [
				new SidePanelItem({
					$data: {
						title: 'Author'
					},
					$methods: {
						click() {
							window.open('https://ccoooss.com')
						}
					}
				}),
				new SidePanelItem({
					$data: {
						title: 'TheNeuronProject'
					},
					$methods: {
						click() {
							window.open('https://github.com/TheNeuronProject')
						}
					}
				}),
				new SidePanelItem({
					$data: {
						title: 'Donate'
					},
					$methods: {
						click() {
							window.open('https://www.patreon.com/classicoldsong')
						}
					}
				})
			]
		})
	]
})
body.contents.push(LP, footer, header, SP)
header.left.push(logo)
body.$mount({target: document.body, option: 'replace'})
exec()

const ls = `
color: #0ddf79;
`
console.warn('%c[NEON]', ls, 'This is a DEMO build of Neonclear. Additional logics are included in this bundle. DO NOT use this build in your project.')
