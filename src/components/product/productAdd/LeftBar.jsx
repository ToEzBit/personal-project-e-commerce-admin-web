import React from "react";
import FormContainer from "./form/FormContainer";
import GalleryMapCon from "./gallery/GalleryMapCon";

function LeftBar({
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
        <GalleryMapCon
          title="Standard Image"
          arrImg={standardImgArr}
          setArrImg={setStandardImgArr}
          deleteImg={deleteImg}
        />
        <GalleryMapCon
          title="HighLight Image"
          arrImg={highlightImgArr}
          setArrImg={setHighlightImgArr}
          deleteImg={deleteImg}
        />
        <GalleryMapCon
          title="Thumbnail Image"
          arrImg={thumbnailImgArr}
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
