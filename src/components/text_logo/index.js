// Import basic elements
import tpl from './tpl.ef'
import style from './style.css'
import { inform, exec } from 'ef.js'

const TextLogo = class extends tpl {
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
export { TextLogo }
