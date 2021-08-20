import React from 'react'
import './NavButton.css'

const NavButton = ({children}) => {
    return (
        <button className="p-2 font-bold">
            {children}
        </button>
    )
}

export default NavButton
