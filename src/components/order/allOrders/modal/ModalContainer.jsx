import React from "react";
import ModalBtn from "./ModalBtn";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";

function ModalContainer({
  id,
  user,
  OrderProducts,
  address,
  slip,
  trackingNumber,
  discount,
  totalPrice,
}) {
  return (
    <>
      <ModalBtn message="view" id={id} />
      <div
        className="modal fade fixed top-0 left-0 hidden w-full  h-full outline-none overflow-x-hidden overflow-y-auto"
        id={`ID${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative  w-full pointer-events-none">
          <div className="modal-content border-none shadow-lg  flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <ModalHeader id={id} user={user} />
            <ModalBody OrderProducts={OrderProducts} />
            <ModalFooter
              address={address}
              slip={slip}
              trackingNumber={trackingNumber}
              discount={discount}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContainer;
