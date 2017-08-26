// Import basic elements
import tpl from './tpl.ef'
import style from './style.css'
import styled from '../../utils/styled.js'
import { inform, exec } from 'ef-core'

const scrollTop = () => {
	window.scrollTo(0, 0)
}

const Header = class extends styled(tpl, style) {
	constructor(state) {
		inform()
		// Apply methods
		super({$methods: {scrollTop}})
		// Apply user state
		this.$update(state)
		// Trigger render
		exec()
	}
}

// Export the module
export { Header }
