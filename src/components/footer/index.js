// Import basic elements
import tpl from './tpl.ef'
import style from './style.css'
import styled from '../../utils/styled.js'

const Footer = class extends styled(tpl, style) {
	constructor(author, year) {
		if (!year) year = (new Date()).getFullYear()
		super({
			$data: {author, year}
		})
	}
}

// Export the module
export { Footer }
