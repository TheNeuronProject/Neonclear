// Import basic elements
import tpl from './tpl.ef'
import style from '../../style.css'
import styled from '../../../utils/styled.js'

// Apply style to the component
const Logo = class extends styled(tpl, style) {
	constructor(colorLeft, colorRight) {
		const $data = {}
		if (colorLeft) $data.colorLeft = colorLeft
		if (colorRight) $data.colorRight = colorRight
		super({$data})
	}
}

// Export the module
export default Logo
