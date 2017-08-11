// Import basic elements
import {
	inform, exec, Body, Header, TextLogo, LogoButton, Page,
	LogoPage, Footer, Drawer, DrawerSection, DrawerItem,
	Article
} from '../neonclear.js'

import Logo from './logo.ef'

import style from './style.css'

const author = 'Yukino Song'

inform()
const body = new Body()
const header = new Header()
const logo = new TextLogo({$data: {style}})
const BL = new Logo({$data: {style}})
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
		classes: style.demo
	},
	logo: BL,
	buttons: [buttonSoon, buttonGH]
})
const page1 = new Page({
	$data: {
		classes: style.page
	},
	contents: [new Article({$data: {author, title: 'Create websites with minimal design.', time: '2017-8-7', id: 'intro'}})]
})
const footer = new Footer({$data: {author}})
const drawer = new Drawer({
	contents: [
		new DrawerSection({
			$data: {
				title: 'Intro'
			},
			items: [
				new DrawerItem({
					$data: {
						title: 'ef.js',
						active: true
					},
					$methods: {
						click() {
							window.open('https://ef.js.org')
						}
					}
				})
			]
		}),
		new DrawerSection({
			$data: {
				title: 'Usage'
			}
		}),
		new DrawerSection({
			$data: {
				title: 'Components'
			},
			items: [
				new DrawerItem({
					$data: {
						title: 'bPlayer-ef'
					},
					$methods: {
						click() {
							window.open('https://bplayer-ef.ccoooss.com')
						}
					}
				})
			]
		}),
		new DrawerSection({
			$data: {
				title: 'About'
			},
			items: [
				new DrawerItem({
					$data: {
						title: 'Author'
					},
					$methods: {
						click() {
							window.open('https://ccoooss.com')
						}
					}
				}),
				new DrawerItem({
					$data: {
						title: 'TheNeuronProject'
					},
					$methods: {
						click() {
							window.open('https://github.com/TheNeuronProject')
						}
					}
				}),
				new DrawerItem({
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
body.contents.push(LP, page1, footer, header, drawer)
header.left.push(logo)
body.$mount({target: document.body, option: 'replace'})
exec()

window.$body = body

const ls = `
color: #0ddf79;
`
console.warn('%c[NEON]', ls, 'This is a DEMO build of Neonclear. Additional contents are included in this bundle. DO NOT use this build in your project.')
