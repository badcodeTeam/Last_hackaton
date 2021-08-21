import React from 'react'
import './NavButton.css'

const NavButton = (props) => {

    const navButtonStyles = ["p-2 font-bold", props.customStyles]
    return (
        <button {...props} className={navButtonStyles.join(' ')}>
            {props.children}
        </button>
    )
}

export default NavButton
