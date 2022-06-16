import React from "react";

function ModalFooter({ slip }) {
  return (
    <div className="modal-footer flex p-4 border-t border-gray-200 rounded-b-md">
      <a className=" text-blue-700 justify-start" target="_blank" href={slip}>
        Slip Payment
      </a>
    </div>
  );
}

export default ModalFooter;
