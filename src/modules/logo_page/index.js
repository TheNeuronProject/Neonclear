// Import basic elements
import tpl from './tpl.ef'
import btn from './btn.ef'
import classNames from './style.css'

const LogoPage = class extends tpl {
	constructor(state) {
		// Apply classes
		const _state = Object.assign({}, state)
		if (!_state.$data) _state.$data = {}
		_state.$data.class = Object.assign({}, classNames, _state.$data.class)
		super(_state)

		// Write your pre-handle methods below
	}
}

const LogoButton = class extends btn {
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
export { LogoPage, LogoButton }
