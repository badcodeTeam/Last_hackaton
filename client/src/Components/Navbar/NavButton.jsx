import React from 'react'
import './NavButton.css'

const NavButton = (props) => {
    return (
        <button {...props} className="p-2 font-bold">
            {props.children}
        </button>
    )
}

export default NavButton
