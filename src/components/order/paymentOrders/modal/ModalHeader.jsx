import React from "react";

function ModalHeader({ id, totalPrice }) {
  return (
    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
      <p>{`Slip Payment For Order Id `}</p>
      <span className="text-xl text-green-400 mx-4">{id}</span>
      <span className="text-xl text-orange-400">{`Total Price : ${totalPrice}`}</span>
      <button
        type="button"
        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default ModalHeader;
