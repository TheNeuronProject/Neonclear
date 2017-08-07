// Import basic elements
import tpl from './tpl.ef'
import btn from './btn.ef'
import style from './style.css'
import { inform, exec } from 'ef.js'

const LogoPage = class extends tpl {
	constructor(state) {
		inform()
		// Apply classes
		super({$data: {style}})
		// Write your pre-handle methods below

		// Apply user state
		this.$update(state)
		// Trigger render
		exec()
	}
}

const LogoButton = class extends btn {
	constructor(state) {
		inform()
		// Apply classes
		super({$data: {style}})
		// Write your pre-handle methods below

		// Apply user state
		this.$update(state)
		// Trigger render
		exec()
	}
}

// Export the module
export { LogoPage, LogoButton }
