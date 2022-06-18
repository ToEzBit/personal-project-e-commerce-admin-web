import React from "react";
import FormContainer from "../productAdd/form/FormContainer";
import OldGalleryMapCon from "./gallery/OldGalleryMapCon";
import NewGalleryMapCon from "./gallery/NewGalleryMapCon";

function LeftBar({
  oldStandardImgArr,
  setOldStandardImgArr,
  oldHighlightImgArr,
  setOldHighlightImgArr,
  oldThumbnailImgArr,
  setOldThumbnailImgArr,
  deleteOldImg,
  standardImgArr,
  setStandardImgArr,
  highlightImgArr,
  setHighlightImgArr,
  thumbnailImgArr,
  setThumbnailImgArr,
  deleteImg,
  productName,
  setProductName,
  mainDescription,
  setMainDescription,
  subDescription1,
  setSubDescription1,
  subDescription2,
  setSubDescription2,
  productPrice,
  setProductPrice,
  productStock,
  setProductStock,
  productCategory,
  setProductCategory,
  productRole,
  setProductRole,
}) {
  return (
    <div className="w-[43rem] px-4 py-4">
      <div>
        <OldGalleryMapCon
          title="Old Standard Image"
          olrImgArr={oldStandardImgArr}
          setOldImgArr={setOldStandardImgArr}
          deleteOldImg={deleteOldImg}
        />
        <NewGalleryMapCon
          title="New Standard Image"
          arrImg={standardImgArr}
          oldImgArr={oldStandardImgArr}
          setArrImg={setStandardImgArr}
          deleteImg={deleteImg}
        />
        <OldGalleryMapCon
          title="Old HighLight Image"
          olrImgArr={oldHighlightImgArr}
          setOldImgArr={setOldHighlightImgArr}
          deleteOldImg={deleteOldImg}
        />
        <NewGalleryMapCon
          title="New HighLight Image"
          arrImg={highlightImgArr}
          oldImgArr={oldHighlightImgArr}
          setArrImg={setHighlightImgArr}
          deleteImg={deleteImg}
        />
        <OldGalleryMapCon
          title="Old Thumbnail Image"
          olrImgArr={oldThumbnailImgArr}
          setOldImgArr={setOldThumbnailImgArr}
          deleteOldImg={deleteOldImg}
        />

        <NewGalleryMapCon
          title="New Thumbnail Image"
          arrImg={thumbnailImgArr}
          oldImgArr={oldThumbnailImgArr}
          setArrImg={setThumbnailImgArr}
          deleteImg={deleteImg}
        />
      </div>
      <div>
        <FormContainer
          productName={productName}
          setProductName={setProductName}
          mainDescription={mainDescription}
          setMainDescription={setMainDescription}
          subDescription1={subDescription1}
          setSubDescription1={setSubDescription1}
          subDescription2={subDescription2}
          setSubDescription2={setSubDescription2}
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          productStock={productStock}
          setProductStock={setProductStock}
          productCategory={productCategory}
          setProductCategory={setProductCategory}
          productRole={productRole}
          setProductRole={setProductRole}
        />
      </div>
    </div>
  );
}

export default LeftBar;
