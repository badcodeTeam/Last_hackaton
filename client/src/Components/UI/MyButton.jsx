import React from "react";
import './UI.css'

const MyButton = (props) => {
    const buttonStyle = ['py-3 w-64 btn-remove-border', props.additionalClasses]
  return (
    <button {...props} className={buttonStyle.join(' ')}>
      {props.children}
    </button>
  );
};

export default MyButton;
