import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function GalleryMapCon({ idx, img, arrImg, setArrImg, deleteImg }) {
  return (
    <>
      <div className="relative">
        <img
          alt="gallery"
          className="block object-cover object-center rounded-lg shadow-lg "
          src={img ? URL.createObjectURL(img) : ""}
        />
        <FaTrashAlt
          className="absolute top-0 right-0 text-white mx-1 my-1"
          role="button"
          onClick={() => deleteImg(idx, arrImg, setArrImg)}
        />
      </div>
    </>
  );
}

export default GalleryMapCon;
