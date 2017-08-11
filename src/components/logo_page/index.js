// Import basic elements
import tpl from './tpl.ef'
import btn from './btn.ef'
import style from './style.css'
import styled from '../../utils/styled.js'

const LogoPage = styled(tpl, style)

const LogoButton = styled(btn, style)

// Export the module
export { LogoPage, LogoButton }
