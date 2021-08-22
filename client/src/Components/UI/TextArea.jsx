import React from "react";

const TextArea = (props) => {

   const textAreaStyles = ["block text-sm py-3 px-4 rounded-lg border outline-none", props.custom, props.resize ? "" : "resize-none"]

  return (
    <textarea
      className={textAreaStyles.join(' ')}
      {...props}
    />
  );
};

export default TextArea;
