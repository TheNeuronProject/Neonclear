// Import basic elements
import tpl from './tpl.ef'
import style from './style.css'
import { inform, exec } from 'ef.js'


const scrollTop = () => {
	window.scrollTo(0, 0)
}

const Header = class extends tpl {
	constructor(state) {
		inform()
		// Apply classes and methods
		super({
			$data: {style},
			$methods: {scrollTop}
		})
		// Write your pre-handle methods below

		// Apply user state
		this.$update(state)
		// Trigger render
		exec()
	}
}

// Export the module
export { Header }
