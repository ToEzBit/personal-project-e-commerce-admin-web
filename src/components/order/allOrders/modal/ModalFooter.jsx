import React from "react";

function ModalFooter({ address, slip }) {
  console.log(slip);
  return (
    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-around p-4 border-t border-gray-200 rounded-b-md">
      {slip ? (
        <a className=" text-blue-700 " target="_blank" href={slip}>
          Slip Payment
        </a>
      ) : null}
      <p>{`Address: ${address.province} ${address.district} ${address.postalCode}`}</p>
      <p>{`${address.description}`}</p>
    </div>
  );
}

export default ModalFooter;
