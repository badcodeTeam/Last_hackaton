import React from "react";

const TextArea = (props) => {

   const textAreaStyles = ["block text-sm py-3 px-4 rounded-lg w-full border outline-none", props.resize ? "" : "resize-none"]

  return (
    <textarea
      className={textAreaStyles.join(' ')}
      {...props}
    />
  );
};

export default TextArea;
