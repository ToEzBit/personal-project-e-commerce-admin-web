import React from "react";
import OldGalleryMapItem from "./OldGalleryMapItem";

function OldGalleryMapCon({ title, olrImgArr, setOldImgArr, deleteOldImg }) {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="grid grid-cols-4 gap-4  ">
        {olrImgArr?.map((img, idx) => {
          return (
            <OldGalleryMapItem
              key={idx}
              idx={idx}
              id={img.id}
              img={img.image}
              olrImgArr={olrImgArr}
              setOldImgArr={setOldImgArr}
              deleteOldImg={deleteOldImg}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OldGalleryMapCon;
