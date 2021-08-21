import React from 'react'

const Select = (props) => {
    return (
        <select {...props} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none">
            {props.children}
        </select>
    )
}

export default Select
