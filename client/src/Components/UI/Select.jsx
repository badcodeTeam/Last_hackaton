import React from 'react'

const Select = (props) => {

    const classStyles = ["block text-sm py-3 px-4 rounded-lg border outline-none", props.custom]

    return (
        <select {...props} className={classStyles.join(' ')}>
            {props.children}
        </select>
    )
}

export default Select
