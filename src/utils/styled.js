import {inform, exec} from 'ef.js'

// Return a styled component
export default (component, style) => class extends component {
	constructor(state) {
		// Hold render
		inform()
		// Apply style
		super({$data: {style}})
		// Apply user state
		this.$update(state)
		// Unhold render
		exec()
	}
}
