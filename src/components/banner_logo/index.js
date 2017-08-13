// Import basic elements
import tpl from './tpl.ef'
import style from './style.css'
import styled from '../../utils/styled.js'

const BannerLogo = class extends styled(tpl, style) {
	constructor(text) {
		super({
			$data: {text}
		})
	}
}

// Export the module
export { BannerLogo }
