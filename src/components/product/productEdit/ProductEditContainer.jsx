import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteProductImage,
  getProductById,
  updateProduct,
} from "../../../api/product";
import ProductEditLeftBar from "./ProductEditLeftBar";
import RightBar from "../productAdd/RightBar";
import SearchBox from "./SearchBox";
import Spinner from "../../common/Spinner";

function ProductEditContainer() {
  const [productId, setProductId] = useState("");
  const [foundProduct, setFoundProduct] = useState(false);

  const [oldStandardImgArr, setOldStandardImgArr] = useState([]);
  const [oldHighlightImgArr, setOldHighlightImgArr] = useState([]);
  const [oldThumbnailImgArr, setOldThumbnailImgArr] = useState([]);
  const [productName, setProductName] = useState("");
  const [mainDescription, setMainDescription] = useState("");
  const [subDescription1, setSubDescription1] = useState("");
  const [subDescription2, setSubDescription2] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productRole, setProductRole] = useState("");
  const [productStatus, setProductStatus] = useState(true);

  const [standardImgArr, setStandardImgArr] = useState([]);
  const [highlightImgArr, setHighlightImgArr] = useState([]);
  const [thumbnailImgArr, setThumbnailImgArr] = useState([]);

  const [deletedOldImgArr, setDeletedOldImgArr] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGetProduct = async () => {
    try {
      const res = await getProductById(productId);

      setProductName(res.productName);
      setMainDescription(res.mainDescription);
      setSubDescription1(res.subDescription1);
      setSubDescription2(res.subDescription2);
      setProductPrice(res.price);
      setProductStock(res.stock);
      setProductCategory(res.category);
      setProductRole(res.role);
      if (res.status === "active") {
        setProductStatus(true);
      } else {
        setProductStatus(false);
      }
      const standardImgArr = res.ProductImages.filter(
        (el) => el.role === "standard"
      );
      const highlightImgArr = res.ProductImages.filter(
        (el) => el.role === "highlight"
      );
      const thumbnailImgArr = res.ProductImages.filter(
        (el) => el.role === "thumbnail"
      );
      setOldStandardImgArr(standardImgArr);
      setOldHighlightImgArr(highlightImgArr);
      setOldThumbnailImgArr(thumbnailImgArr);
      setFoundProduct(true);
    } catch (err) {
      alert(err.response.data.message);
      setOldHighlightImgArr([]);
      setOldThumbnailImgArr([]);
      setOldStandardImgArr([]);
      setProductName("");
      setMainDescription("");
      setSubDescription1("");
      setSubDescription2("");
      setProductPrice("");
      setProductStock("");
      setProductCategory("");
      setProductRole("");
      setProductStatus(true);
      setFoundProduct(false);
    }
  };

  const deleteOldImg = (idx, olrImgArr, setOldImgArr, id) => {
    let newArr = [...olrImgArr];
    newArr.splice(idx, 1);
    setOldImgArr(newArr);
    setDeletedOldImgArr([...deletedOldImgArr, id]);
  };

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
        (!productCategory && productCategory === "Select Category") ||
        (!productRole && productRole === "Select Role") ||
        (oldStandardImgArr.length === 0 && standardImgArr.length === 0) ||
        (oldThumbnailImgArr.length === 0 && thumbnailImgArr.length === 0)
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
      await updateProduct(productId, formData);
      console.log("upload Success");

      if (deletedOldImgArr.length > 0) {
        for (const el of deletedOldImgArr) {
          await deleteProductImage(+el);
        }
      }
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
      <div className=" w-[86vw] my-4">
        <div className="flex">
          <h1 className="text-2xl font-bold mx-4">Product Edit</h1>
          <SearchBox
            productId={productId}
            setProductId={setProductId}
            handleGetProduct={handleGetProduct}
          />
        </div>
        {foundProduct && (
          <div className="flex">
            <ProductEditLeftBar
              oldStandardImgArr={oldStandardImgArr}
              setOldStandardImgArr={setOldStandardImgArr}
              oldHighlightImgArr={oldHighlightImgArr}
              setOldHighlightImgArr={setOldHighlightImgArr}
              oldThumbnailImgArr={oldThumbnailImgArr}
              setOldThumbnailImgArr={setOldThumbnailImgArr}
              deleteOldImg={deleteOldImg}
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
            <div className="mx-4 my-16">
              <RightBar
                productStatus={productStatus}
                setProductStatus={setProductStatus}
                handlePushProduct={handlePushProduct}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductEditContainer;
