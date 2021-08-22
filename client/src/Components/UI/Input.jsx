import React from "react";

const Input = (props) => {

  const inputStyles = ['block text-sm py-3 px-4 rounded-lg border outline-none', props.custom]

  return (
    <input
      className={inputStyles.join(' ')}
      {...props}
    />
  );
};

export default Input;
