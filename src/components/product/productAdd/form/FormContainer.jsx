import React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import SelectContainer from "./SelectContainer";
import SelectOption from "./SelectOption";

function FormContainer({
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
    <div className="py-4 px-4 my-4 border border-slate-200 rounded-xl shadow-lg">
      <h1 className="text-xl font-bold ">General Info</h1>
      <form>
        <FormInput
          title="Product Name"
          value={productName}
          setInput={setProductName}
        />
        <FormTextArea
          title="Main Description"
          value={mainDescription}
          setInput={setMainDescription}
        />
        <FormTextArea
          title="Sub Description 1"
          value={subDescription1}
          setInput={setSubDescription1}
        />
        <FormTextArea
          title="Sub Description 2"
          value={subDescription2}
          setInput={setSubDescription2}
        />
        <FormInput
          title="Product Price"
          value={productPrice}
          setInput={setProductPrice}
        />
        <FormInput
          title="Product Stock"
          value={productStock}
          setInput={setProductStock}
        />
        <SelectContainer
          title="Product Category"
          value={productCategory}
          setInput={setProductCategory}
        >
          <SelectOption value="Select Category" />
          <SelectOption value="sd" />
          <SelectOption value="hg" />
          <SelectOption value="rg" />
          <SelectOption value="mg" />
          <SelectOption value="pg" />
          <SelectOption value="mega" />
        </SelectContainer>
        <SelectContainer
          title="Product Role"
          value={productRole}
          setInput={setProductRole}
        >
          <SelectOption value="Select Role" />
          <SelectOption value="standard" />
          <SelectOption value="limited" />
          <SelectOption value="event" />
        </SelectContainer>
      </form>
    </div>
  );
}

export default FormContainer;
