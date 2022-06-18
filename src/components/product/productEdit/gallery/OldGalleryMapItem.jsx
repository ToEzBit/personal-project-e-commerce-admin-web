import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function OldGalleryMapItem({
  idx,
  img,
  id,
  olrImgArr,
  setOldImgArr,
  deleteOldImg,
}) {
  return (
    <>
      <div className="relative">
        <img
          alt="gallery"
          className="block object-cover object-center rounded-lg shadow-lg "
          src={img}
        />
        <FaTrashAlt
          className="absolute top-0 right-0 text-white mx-1 my-1"
          role="button"
          onClick={() => deleteOldImg(idx, olrImgArr, setOldImgArr, id)}
        />
      </div>
    </>
  );
}

export default OldGalleryMapItem;
