import React from "react";
import GalleryMapItem from "../../productAdd/gallery/GalleryMapItem";
import GalleryInput from "../../productAdd/gallery/GalleryInput";

function NewGalleryMapCon({ title, arrImg, oldImgArr, setArrImg, deleteImg }) {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold">{`${title}`}</h1>
      <div className="grid grid-cols-4 gap-4  ">
        {arrImg?.map((img, idx) => {
          return (
            <GalleryMapItem
              key={idx}
              idx={idx}
              img={img}
              arrImg={arrImg}
              setArrImg={setArrImg}
              deleteImg={deleteImg}
            />
          );
        })}
        {title === "New Standard Image" &&
          oldImgArr?.length + arrImg.length < 8 && (
            <GalleryInput setArrImg={setArrImg} />
          )}
        {title === "New HighLight Image" &&
          oldImgArr?.length + arrImg.length < 8 && (
            <GalleryInput setArrImg={setArrImg} />
          )}
        {title === "New Thumbnail Image" &&
          oldImgArr?.length + arrImg.length < 1 && (
            <GalleryInput setArrImg={setArrImg} />
          )}
      </div>
    </div>
  );
}

export default NewGalleryMapCon;
