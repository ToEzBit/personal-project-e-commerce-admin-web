import React from "react";
import ModalBtn from "./ModalBtn";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";

function ModalContainer({ id, slip, totalPrice }) {
  return (
    <>
      <ModalBtn message="Show Slip" id={id} />
      <div
        className="modal fade fixed top-0 left-0 hidden w-full  h-full outline-none overflow-x-hidden overflow-y-auto"
        id={`ID${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative  w-full pointer-events-none">
          <div className="modal-content border-none shadow-lg  flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <ModalHeader id={id} totalPrice={totalPrice} />
            <ModalBody slip={slip} />
            <ModalFooter slip={slip} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContainer;
