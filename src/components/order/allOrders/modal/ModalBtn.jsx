import React from "react";

function ModalBtn({ message, id }) {
  return (
    <button
      className="bg-main-theme-color hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
      data-bs-toggle="modal"
      data-bs-target={`#ID${id}`}
    >
      {message}
    </button>
  );
}

export default ModalBtn;
