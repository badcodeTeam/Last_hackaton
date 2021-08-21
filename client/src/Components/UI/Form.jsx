import React from 'react'

const Form = (props) => {
    const formStyles = ["rounded bg-green-200 p-10 flex flex-col justify-evenly items-center", props.customClasses]
    return (
        <form className={formStyles.join(' ')} {...props}>
            {props.children}
        </form>
    )
}

export default Form
