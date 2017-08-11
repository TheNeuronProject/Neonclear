// Import basic elements
import tpl from './tpl.ef'
import section from './section.ef'
import item from './item.ef'
import style from './style.css'
import { inform, exec } from 'ef.js'

const Drawer = class extends tpl {
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

const DrawerSection = class extends section {
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

const DrawerItem = class extends item {
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
export { Drawer, DrawerSection, DrawerItem }
