import React from "react";

function SelectContainer({ title, children, value, setInput }) {
  return (
    <div className="px-4 py-4">
      <div className="mb-3 xl:w-96">
        <label className="inline-block mb-2 text-gray-700">{title}</label>
        <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          value={value}
          onChange={(e) => setInput(e.target.value)}
        >
          {children}
        </select>
      </div>
    </div>
  );
}

export default SelectContainer;
