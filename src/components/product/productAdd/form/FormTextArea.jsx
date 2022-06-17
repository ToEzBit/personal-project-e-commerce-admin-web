import React from "react";

function FormInput({ title, value, setInput }) {
  return (
    <div className=" px-4 py-4">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor={title}
          className="form-label inline-block mb-2 text-gray-700"
        >
          {title}
        </label>
        <textarea
          type="text"
          className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
          id={title}
          placeholder={`Enter ${title}`}
          value={value}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FormInput;
