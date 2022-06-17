import React, { useState } from "react";

import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import Spinner from "../../common/Spinner";
import { createProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";

function ProductAddContainer() {
  const [standardImgArr, setStandardImgArr] = useState([]);
  const [highlightImgArr, setHighlightImgArr] = useState([]);
  const [thumbnailImgArr, setThumbnailImgArr] = useState([]);
  const [productName, setProductName] = useState("");
  const [mainDescription, setMainDescription] = useState("");
  const [subDescription1, setSubDescription1] = useState("");
  const [subDescription2, setSubDescription2] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productRole, setProductRole] = useState("");
  const [productStatus, setProductStatus] = useState(true);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const deleteImg = (idx, arrImg, setArrImg) => {
    let newArr = [...arrImg];
    newArr.splice(idx, 1);
    setArrImg(newArr);
  };

  const handlePushProduct = async () => {
    try {
      setLoading(true);
      if (
        !productName ||
        !mainDescription ||
        !productPrice ||
        !productStock ||
        !productCategory ||
        !productRole ||
        standardImgArr.length === 0 ||
        thumbnailImgArr.length === 0
      ) {
        alert("Please fill all the fields");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("mainDescription", mainDescription);
      formData.append("subDescription1", subDescription1);
      formData.append("subDescription2", subDescription2);
      formData.append("price", productPrice);
      formData.append("stock", productStock);
      formData.append("category", productCategory);
      formData.append("role", productRole);
      if (productStatus) {
        formData.append("status", "active");
      } else {
        formData.append("status", "inactive");
      }
      for (const el of standardImgArr) {
        formData.append("standardImg", el);
      }
      for (const el of highlightImgArr) {
        formData.append("highlightImg", el);
      }
      for (const el of thumbnailImgArr) {
        formData.append("thumbnail", el);
      }
      await createProduct(formData);
      navigate("/product-view");
      window.location.reload(false);
    } catch (err) {
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div>
        <h1 className="text-2xl font-bold my-4 mx-4">Product Add</h1>
        <div className="flex">
          <LeftBar
            standardImgArr={standardImgArr}
            setStandardImgArr={setStandardImgArr}
            highlightImgArr={highlightImgArr}
            setHighlightImgArr={setHighlightImgArr}
            thumbnailImgArr={thumbnailImgArr}
            setThumbnailImgArr={setThumbnailImgArr}
            deleteImg={deleteImg}
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
          <RightBar
            productStatus={productStatus}
            setProductStatus={setProductStatus}
            handlePushProduct={handlePushProduct}
          />
        </div>
      </div>
    </>
  );
}

export default ProductAddContainer;
