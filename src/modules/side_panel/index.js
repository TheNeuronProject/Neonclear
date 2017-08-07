// Import basic elements
import tpl from './tpl.ef'
import section from './section.ef'
import item from './item.ef'
import style from './style.css'
import { inform, exec } from 'ef.js'

const SidePanel = class extends tpl {
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

const SidePanelSection = class extends section {
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

const makeActive = ({state: {$data}, value}) => {
	if (value) $data.style.activeClass = style.active
	else $data.style.activeClass = ''
}

const SidePanelItem = class extends item {
	constructor(state) {
		inform()
		// Apply classes
		super({$data: {style}})
		// Write your pre-handle methods below
		this.$subscribe('active', makeActive)

		// Apply user state
		this.$update(state)
		// Trigger render
		exec()
	}
}

// Export the module
export { SidePanel, SidePanelSection, SidePanelItem }
