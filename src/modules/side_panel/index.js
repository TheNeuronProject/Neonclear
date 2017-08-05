// Import basic elements
import tpl from './tpl.ef'
import section from './section.ef'
import item from './item.ef'
import classNames from './style.css'

const SidePanel = class extends tpl {
	constructor(state) {
		// Apply classes
		const _state = Object.assign({}, state)
		if (!_state.$data) _state.$data = {}
		_state.$data.class = Object.assign({}, classNames, _state.$data.class)
		super(_state)

		// Write your pre-handle methods below
	}
}

const SidePanelSection = class extends section {
	constructor(state) {
		// Apply classes
		const _state = Object.assign({}, state)
		if (!_state.$data) _state.$data = {}
		_state.$data.class = Object.assign({}, classNames, _state.$data.class)
		super(_state)

		// Write your pre-handle methods below
	}
}

// Export the module
export { SidePanel, SidePanelSection, item as SidePanelItem }
