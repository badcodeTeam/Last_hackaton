import React from "react";

const Input = (props) => {
  return (
    <input
      className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
      {...props}
    />
  );
};

export default Input;
