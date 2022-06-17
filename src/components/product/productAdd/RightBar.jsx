import React from "react";

function RightBar({ productStatus, setProductStatus, handlePushProduct }) {
  return (
    <div className="w-96 ml-24 ">
      <div className="shadow-lg px-4 py-4">
        <h1 className="text-xl font-bold">Visibility</h1>
        <p className="text-slate-300">
          Set up product visibility for the customers
        </p>
        <div className="bg-payment-notification-color px-4 py-4 my-4 rounded-lg">
          <div className="form-check form-switch flex justify-between">
            <label
              className="form-check-label inline-block text-[#00598A] font-bold"
              htmlFor="flexSwitchCheckDefault"
            >
              Visible
            </label>
            <input
              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={productStatus}
              onChange={() => setProductStatus(!productStatus)}
            />
          </div>
        </div>
      </div>
      <div className="shadow-lg px-4 py-4 ny-4">
        <h1 className="text-xl font-bold">Push</h1>
        <p className="text-slate-300">Push product to the market</p>
        <button
          className="px-4 py-4 bg-orange-200 hover:bg-orange-400 text-white w-full rounded-lg my-4 text-xl font-bold"
          onClick={handlePushProduct}
        >
          Push
        </button>
      </div>
    </div>
  );
}

export default RightBar;
