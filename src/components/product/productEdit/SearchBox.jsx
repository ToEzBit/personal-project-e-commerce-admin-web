import React from "react";

function SearchBox({ productId, setProductId, handleGetProduct }) {
  return (
    <div className="absolute right-0">
      <input
        className="border-2  "
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button
        className="mx-4 py-1 px-1 bg-orange-200 hover:bg-orange-400 text-white  rounded-lg my-4  font-bold"
        onClick={handleGetProduct}
      >
        Search Product
      </button>
    </div>
  );
}

export default SearchBox;
