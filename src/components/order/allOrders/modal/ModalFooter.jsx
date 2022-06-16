import React from "react";

function ModalFooter({ address, slip, trackingNumber }) {
  return (
    <div className="modal-footer flex flex-col flex-shrink-0 flex-wrap  justify-center p-4 border-t border-gray-200 rounded-b-md">
      <div className="flex justify-between">
        {slip ? (
          <a className=" text-blue-700 " target="_blank" href={slip}>
            Slip Payment
          </a>
        ) : null}
        {trackingNumber ? (
          <p className="text-orange-400">{`Tracking Number : ${trackingNumber}`}</p>
        ) : null}
      </div>
      <div className="flex ">
        <p>{`Address: ${address.description} ${address.province} ${address.district} ${address.postalCode}`}</p>
      </div>
    </div>
  );
}

export default ModalFooter;
