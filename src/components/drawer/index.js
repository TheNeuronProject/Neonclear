// Import basic elements
import tpl from './tpl.ef'
import section from './section.ef'
import item from './item.ef'
import style from './style.css'
import styled from '../../utils/styled.js'
import { inform, exec } from 'ef-core'

const Drawer = styled(tpl, style)

const DrawerSection = styled(section, style)

const makeActive = ({state: {$data}, value}) => {
	if (value) $data.style.activeClass = style.active
	else $data.style.activeClass = ''
}

const DrawerItem = class extends styled(item, style) {
	constructor(state) {
		inform()
		// Init component
		super()
		// Make subscriptions
		this.$subscribe('active', makeActive)
		// Apply user state
		this.$update(state)
		// Trigger render
		exec()
	}
}

// Export the module
export { Drawer, DrawerSection, DrawerItem }
