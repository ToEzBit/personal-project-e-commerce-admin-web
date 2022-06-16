import React from "react";

function ModalHeader({ id, user }) {
  return (
    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
      <h5
        className="text-xl font-medium leading-normal text-gray-800"
        id="exampleModalLabel"
      >
        {`Order id ${id} Customer id: ${user.id}`}
      </h5>
      {user.firstName ? (
        <h5 className="text-xl font-medium leading-normal text-gray-800 px-4">{`${user.firstName} ${user.lastName}`}</h5>
      ) : (
        <p className="text-xl font-medium leading-normal text-gray-800 px-4">
          {`${user.username}`}
        </p>
      )}

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
