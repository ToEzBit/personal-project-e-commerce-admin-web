import React from "react";
import GalleryMapItem from "./GalleryMapItem";
import GalleryInput from "./GalleryInput";

function GalleryMapCon({ title, arrImg, setArrImg, deleteImg }) {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="grid grid-cols-4 gap-4  ">
        {arrImg.map((img, idx) => {
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
        {title === "Standard Image" && arrImg.length < 8 && (
          <GalleryInput setArrImg={setArrImg} />
        )}
        {title === "HighLight Image" && arrImg.length < 8 && (
          <GalleryInput setArrImg={setArrImg} />
        )}
        {title === "Thumbnail Image" && arrImg.length < 1 && (
          <GalleryInput setArrImg={setArrImg} />
        )}
      </div>
    </div>
  );
}

export default GalleryMapCon;
