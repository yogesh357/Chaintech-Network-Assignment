import React from "react";

function Input({ type, placeholder, onChange, ...props }) {
  return (
    <div className="px-8 py-2 border-2 border-gray-800 rounded-2xl">
      <input
        className="text-lg w-full outline-none bg-transparent placeholder:text-gray-400 placeholder:italic placeholder:opacity-70"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required
        {...props}
      />
    </div>
  );
}

export default Input;
